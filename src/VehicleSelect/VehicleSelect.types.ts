// Vehicle types
export type Vehicle = {
  _id: string;
  modelYear: string;
  projectCode: string;
  variant: string;
};

// types for the selected vehicle
export type SelectedVehicle = {
  _id: string;
  project: string;
  modelYear: string;
  variant: string;
  gate: string;
};

export interface VehicleSelectProps {
  /**
   * List of gates to show in the dropdown
   */
  allGates: string[];
  /**
   * Array of all vehicles
   */
  allVehicles: Vehicle[];
  /**
   * FlexDirection of the component
   */
  flexDirection?: string;
  /**
   * FlexWrap of the component
   */
  flexWrap?: string;
  /**
   * Callback function fired on each vehicle metadata change
   */
  onChange: (value: SelectedVehicle[]) => void;
  /**
   * The currently selected vehicles
   */
  value: SelectedVehicle[];
}
