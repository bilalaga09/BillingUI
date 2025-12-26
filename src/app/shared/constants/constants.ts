export interface MenuItem {
  label: string;
  icon: string;
  route?: string;
  children?: MenuItem[];
  expanded?: boolean;
}

export const MENU_ITEMS: MenuItem[] = [
  { label: 'Dashboard', icon: 'dashboard', route: '/home/dashboard' },
  {
    label: 'Masters',
    icon: 'manage_accounts',
    expanded: false,
    children: [
      { label: 'Customers', route: '/home/customers', icon: 'person' },
      { label: 'Vendors', route: '/home/vendors', icon: 'person_add' },
      { label: 'Products', route: '/home/products', icon: 'inventory_2' },
      { label: 'Categories', route: '/home/categories', icon: 'category' },
      { label: 'Units of Measure', route: '/home/units', icon: 'straighten' },
      { label: 'Taxes', route: '/home/taxes', icon: 'receipt' },
      { label: 'Price Lists', route: '/home/price-lists', icon: 'local_offer' }
    ]
  },
  {
    label: 'Sales',
    icon: 'shopping_cart',
    expanded: false,
    children: [
      { label: 'Quotations', route: '/home/quotations', icon: 'description' },
      { label: 'Sales Orders', route: '/home/sales-orders', icon: 'assignment' },
      { label: 'Invoices', route: '/home/invoices', icon: 'receipt_long' },
      { label: 'Credit Notes', route: '/home/credit-notes', icon: 'note' },
      { label: 'Returns', route: '/home/returns', icon: 'undo' }
    ]
  },
  {
    label: 'Purchases',
    icon: 'shopping_bag',
    expanded: false,
    children: [
      { label: 'Purchase Orders', route: '/home/purchase-orders', icon: 'assignment_turned_in' },
      { label: 'Purchase Invoices', route: '/home/purchase-invoices', icon: 'description' },
      { label: 'Debit Notes', route: '/home/debit-notes', icon: 'note_add' },
      { label: 'Returns', route: '/home/purchase-returns', icon: 'undo' }
    ]
  },
  {
    label: 'Inventory',
    icon: 'warehouse',
    expanded: false,
    children: [
      { label: 'Stock Items', route: '/home/stock-items', icon: 'inventory' },
      { label: 'Stock In/Out', route: '/home/stock-movements', icon: 'trending_up' },
      { label: 'Warehouse', route: '/home/warehouse', icon: 'location_on' },
      { label: 'Stock Adjustment', route: '/home/stock-adjustment', icon: 'settings_backup_restore' },
      { label: 'Low Stock Alerts', route: '/home/low-stock', icon: 'warning' }
    ]
  },
  {
    label: 'Payments',
    icon: 'payment',
    expanded: false,
    children: [
      { label: 'Receive Payment', route: '/home/receive-payment', icon: 'add_circle' },
      { label: 'Make Payment', route: '/home/make-payment', icon: 'remove_circle' },
      { label: 'Customer Ledger', route: '/home/customer-ledger', icon: 'history' },
      { label: 'Vendor Ledger', route: '/home/vendor-ledger', icon: 'history' }
    ]
  },
  {
    label: 'Accounting',
    icon: 'account_balance',
    expanded: false,
    children: [
      { label: 'Chart of Accounts', route: '/home/chart-of-accounts', icon: 'account_tree' },
      { label: 'Journal Entries', route: '/home/journal-entries', icon: 'edit_note' },
      { label: 'Trial Balance', route: '/home/trial-balance', icon: 'task_alt' },
      { label: 'Profit & Loss', route: '/home/profit-loss', icon: 'trending_up' },
      { label: 'Balance Sheet', route: '/home/balance-sheet', icon: 'assessment' }
    ]
  },
  {
    label: 'Reports',
    icon: 'assessment',
    expanded: false,
    children: [
      { label: 'Sales Reports', route: '/home/sales-reports', icon: 'bar_chart' },
      { label: 'Purchase Reports', route: '/home/purchase-reports', icon: 'bar_chart' },
      { label: 'Tax Reports', route: '/home/tax-reports', icon: 'receipt' },
      { label: 'Outstanding Invoices', route: '/home/outstanding', icon: 'pending_actions' },
      { label: 'Customer/Vendor Reports', route: '/home/party-reports', icon: 'group' }
    ]
  },
  {
    label: 'Settings',
    icon: 'settings',
    expanded: false,
    children: [
      { label: 'Company Profile', route: '/home/company-profile', icon: 'info' },
      { label: 'Users & Roles', route: '/home/users', icon: 'group_add' },
      { label: 'Permissions', route: '/home/permissions', icon: 'security' },
      { label: 'Number Series', route: '/home/number-series', icon: 'numbers' },
      { label: 'Financial Year', route: '/home/financial-year', icon: 'calendar_today' },
      { label: 'Integrations', route: '/home/integrations', icon: 'integration_instructions' }
    ]
  }
];
