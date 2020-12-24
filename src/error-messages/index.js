const Errors = {
  INVALID_VIN: 'ERROR_INVALID_VIN',
  VIN_NOT_FOUND: 'ERROR_VIN_NOT_FOUND',
  ERROR_SEARCH_VIN: 'ERROR_SEARCH_VIN',
  VIN_LOOKUP_ERROR: 'ERROR_VIN_LOOKUP',
  CONFIG_NOT_FOUND: 'ERROR_CONFIG_NOT_FOUND',
  USER_NOT_ASSOCIATED_DEALER: 'ERROR_USER_NOT_ASSOCIATED_DEALER',
  NO_BILL_PENDING_SUBSCRIPTION: 'ERROR_NO_BILL_PENDING_SUBSCRIPTION',
  DEALER_NOT_FOUND: 'ERROR_DEALER_NOT_FOUND',
  MARKET_PRICING_NOT_EXIST: 'ERROR_MARKET_PRICING_NOT_EXIST',
  UNABLE_CALCULATE_TAXES: 'ERROR_UNABLE_CALCULATE_TAXES',
  SUBSCRIPTION_NOT_RESCHEDULABLE: 'ERROR_SUBSCRIPTION_NOT_RESCHEDULABLE',
  SWAP_SUBSCRIPTION_NOT_FOUND: 'ERROR_SWAP_SUBSCRIPTION_NOT_FOUND',
  UNRETURNED_SWAP_VEHICLE: 'ERROR_UNRETURNED_SWAP_VEHICLE',
  ADDITIONAL_SIGNATURES: 'ERROR_ADDITIONAL_SIGNATURES',
  NO_BILL_ASSOCIATED_SUBSCRIPTION: 'ERROR_NO_BILL_ASSOCIATED_SUBSCRIPTION',
  PREVIOUS_VEHICLE_NOT_RETURNED: 'ERROR_PREVIOUS_VEHICLE_NOT_RETURNED',
  SUBSCRIPTION_UNPAID: 'ERROR_SUBSCRIPTION_UNPAID',
  NOT_PENDING_SUBSCRIPTION: 'ERROR_NOT_PENDING_SUBSCRIPTION',
  SUBSCRIPTION_NOT_MARKED_AS_RECOVERABLE: 'ERROR_SUBSCRIPTION_NOT_MARKED_AS_RECOVERABLE',
  SUBSCRIPTION_NOT_ACTIVE: 'ERROR_SUBSCRIPTION_NOT_ACTIVE',
  SUBSCRIPTION_ALREADY_MARKED_AS_RECOVERABLE: 'ERROR_SUBSCRIPTION_ALREADY_MARKED_AS_RECOVERABLE',
  SUBSCRIPTION_NOT_ACTIVE_NOT_RECOVERABLE: 'ERROR_SUBSCRIPTION_NOT_ACTIVE_NOT_RECOVERABLE',
  SUBSCRIPTION_NOT_ACTIVE_DROP_OFF: 'ERROR_SUBSCRIPTION_NOT_ACTIVE_DROP_OFF',
  UNABLE_GET_RETURN: 'ERROR_UNABLE_GET_RETURN',
  UNABLE_PROCESS_RETURN: 'ERROR_UNABLE_PROCESS_RETURN',
  NO_SWAP_SUBSCRIPTION: 'ERROR_NO_SWAP_SUBSCRIPTION',
  SWAP_ALREADY_DONE: 'ERROR_SWAP_ALREADY_DONE',
  SUBSCRIPTION_NOT_ACTIVE_NOT_SWAP: 'ERROR_SUBSCRIPTION_NOT_ACTIVE_NOT_SWAP',
  SUBSCRIPTION_ENDS_BEFORE_GIVEN_DATE: 'ERROR_SUBSCRIPTION_ENDS_BEFORE_GIVEN_DATE',
  SUBSCRIPTION_ALREADY_MARKED_SWAP: 'ERROR_SUBSCRIPTION_ALREADY_MARKED_SWAP',
  SUBSCRIPTION_RENEWED_SWAP: 'ERROR_SUBSCRIPTION_RENEWED_SWAP',
  VEHICLE_UNAVAILABLE: 'ERROR_VEHICLE_UNAVAILABLE',
  INVALID_TYPE_FILE: 'ERROR_INVALID_TYPE_FILE',
  EMAIL_NOT_FOUND: 'ERROR_EMAIL_NOT_FOUND',
  NO_CURRENT_ACTIVE_SUBSCRIPTION: 'ERROR_NO_CURRENT_ACTIVE_SUBSCRIPTION',
  ODOMETER_LESS_THAN_CURRENT: 'ERROR_ODOMETER_LESS_THAN_CURRENT',
  MISSING_TELEMETRY_PARAMETERS: 'ERROR_MISSING_TELEMETRY_PARAMETERS',
  TOO_COMMON_PASSWORD: 'ERROR_TOO_COMMON_PASSWORD',
  NOT_EXISTING_USER: 'ERROR_NOT_EXISTING_USER',
  ERROR_CREATING_ACCOUNT: 'ERROR_CREATING_ACCOUNT',
  SUBSCRIBER_NOT_FOUND: 'ERROR_SUBSCRIBER_NOT_FOUND',
  CANNOT_CANCEL_RENEWAL_NOT_RENEWED_SUBSCRIPTION: 'ERROR_CANNOT_CANCEL_NOT_RENEWED_SUBSCRIPTION',
  CANNOT_CANCEL_RENEWAL_NOT_ACTIVE_SUBSCRIPTION:
    'ERROR_CANNOT_CANCEL_RENEWAL_NOT_ACTIVE_SUBSCRIPTION',
  CANNOT_CANCEL_RENEWAL_NO_RELATED_SUBSCRIPTION:
    'ERROR_CANNOT_CANCEL_RENEWAL_NO_RELATED_SUBSCRIPTION',
  CANNOT_CANCEL_RENEWAL_NOT_PENDING_SUBSCRIPTION:
    'ERROR_CANNOT_CANCEL_RENEWAL_NOT_PENDING_SUBSCRIPTION',
  ERROR_RENEWAL_SUBSCRIPTION_NO_BILL: 'ERROR_RENEWAL_SUBSCRIPTION_NO_BILL',
  ERROR_EXISITING_DEPOSIT_FOR_RATE_CLASS: 'ERROR_EXISITING_DEPOSIT_FOR_RATE_CLASS',
  NO_TERM_SELECTED: 'ERROR_NO_TERM_SELECTED',
  ALREADY_EXISTING_RATE: 'ERROR_ALREADY_EXISTING_RATE',
  NON_EXISTING_RATE_CLASS: 'ERROR_NON_EXISTING_RATE_CLASS',
  ERROR_CALLING_AVALARA: 'ERROR_CALLING_AVALARA_TO_WARM_CACHE',
  UNABLE_TO_CONNECT_TO_AVALARA: 'UNABLE_TO_CONNECT_TO_AVALARA',
  FAILED_CALCULATE_TAXES: 'FAILED_CALCULATE_TAXES',
  ERROR_CALCULATING_TAXES: 'ERROR_CALCULATING_TAXES'
}

export default Errors
