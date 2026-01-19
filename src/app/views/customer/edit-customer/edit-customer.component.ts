import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-customer',
  standalone: false,
  templateUrl: './edit-customer.component.html',
  styleUrl: './edit-customer.component.scss'
})
export class EditCustomerComponent {
  customerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EditCustomerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.customerForm = this.fb.group({
      name: [data?.Name || '', Validators.required],
      phone: [data?.Phone || ''],
      email: [data?.Email || '', Validators.email],
      address: [data?.Address || ''],
      gstNumber: [data?.GSTNumber || ''],
      createdAt: [{ value: data?.CreatedAt || new Date(), disabled: true }]
    });
  }

  onCancel() {
    this.dialogRef.close();
  }

  onSave() {
    if (this.customerForm.valid) {
      this.dialogRef.close(this.customerForm.getRawValue());
    }
  }
}
