export interface TransferListProps {
  /**
   * Array of Items.
   */
  items: string[];
  /**
   * Callback fired when the new item is selected.
   */
  onChange: (value: string | string[]) => void;
  /**
   * Array of selectedItems.
   */
  selectedItems: string[];
}
