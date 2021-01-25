var Errors = {
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
  CANNOT_CANCEL_RENEWAL_NOT_ACTIVE_SUBSCRIPTION: 'ERROR_CANNOT_CANCEL_RENEWAL_NOT_ACTIVE_SUBSCRIPTION',
  CANNOT_CANCEL_RENEWAL_NO_RELATED_SUBSCRIPTION: 'ERROR_CANNOT_CANCEL_RENEWAL_NO_RELATED_SUBSCRIPTION',
  CANNOT_CANCEL_RENEWAL_NOT_PENDING_SUBSCRIPTION: 'ERROR_CANNOT_CANCEL_RENEWAL_NOT_PENDING_SUBSCRIPTION',
  ERROR_RENEWAL_SUBSCRIPTION_NO_BILL: 'ERROR_RENEWAL_SUBSCRIPTION_NO_BILL',
  ERROR_EXISITING_DEPOSIT_FOR_RATE_CLASS: 'ERROR_EXISITING_DEPOSIT_FOR_RATE_CLASS',
  NO_TERM_SELECTED: 'ERROR_NO_TERM_SELECTED',
  ALREADY_EXISTING_RATE: 'ERROR_ALREADY_EXISTING_RATE',
  NON_EXISTING_RATE_CLASS: 'ERROR_NON_EXISTING_RATE_CLASS',
  ERROR_CALLING_AVALARA: 'ERROR_CALLING_AVALARA_TO_WARM_CACHE',
  UNABLE_TO_CONNECT_TO_AVALARA: 'UNABLE_TO_CONNECT_TO_AVALARA',
  FAILED_CALCULATE_TAXES: 'FAILED_CALCULATE_TAXES',
  ERROR_CALCULATING_TAXES: 'ERROR_CALCULATING_TAXES',
  NOT_PENDING_SUBSCRIPTION_CANNOT_BE_CANCELLED: 'ERROR_NOT_PENDING_SUBSCRIPTION_CANNOT_BE_CANCELLED',
  ERROR_SUBSCRIPTION_NOT_PENDING_CANNOT_BE_CANCELLED: 'ERROR_SUBSCRIPTION_NOT_PENDING_CANNOT_BE_CANCELLED',
  ERROR_SWAP_SUBSCRIPTION_CANNOT_BE_CANCELLED: 'ERROR_SWAP_SUBSCRIPTION_CANNOT_BE_CANCELLED',
  ERROR_RENEWAL_CANNOT_BE_CANCELLED: 'ERROR_RENEWAL_CANNOT_BE_CANCELLED',
  ERROR_ACTIVITY_ACTION_NOT_EXIST: 'ERROR_ACTIVITY_ACTION_NOT_EXIST',
  ERROR_INVALID_USERNAME_PASSWORD: 'ERROR_INVALID_USERNAME_PASSWORD',
  ERROR_INVALID_TOKEN: 'ERROR_INVALID_TOKEN',
  ERROR_PASSWORD_EXPIRED: 'ERROR_PASSWORD_EXPIRED',
  ERROR_PASSWORD_NOT_MATCHES_PATTERN: 'ERROR_PASSWORD_NOT_MATCHES_PATTERN',
  ERROR_BILL_NOT_EXIST: 'ERROR_BILL_NOT_EXIST',
  ERROR_INVALID_STRIPE_EVENT: 'ERROR_INVALID_STRIPE_EVENT',
  ERROR_STRIPE_NON_EXISTING_TRANSACTION: 'ERROR_STRIPE_NON_EXISTING_TRANSACTION',
  ERROR_STRIPE_NON_EXISTING_DISPUTE: 'ERROR_STRIPE_NON_EXISTING_DISPUTE',
  ERROR_DISPUTE_ALREADY_PROCESSED: 'ERROR_DISPUTE_ALREADY_PROCESSED',
  ERROR_CHARGE_HAS_BEEN_REFUNDED: 'ERROR_CHARGE_HAS_BEEN_REFUNDED',
  ERROR_CHARGE_ALREADY_CAPTURED: 'ERROR_CHARGE_ALREADY_CAPTURED',
  ERROR_MOBILE_SERVICE_LOGIN_REQUIRED: 'ERROR_MOBILE_SERVICE_LOGIN_REQUIRED',
  ERROR_MOBILE_SERVICE_LOGALTY_SERVICE_URL: 'ERROR_MOBILE_SERVICE_LOGALTY_SERVICE_URL',
  ERROR_MOBILE_SERVICE_LOOKS_LIKE: 'ERROR_MOBILE_SERVICE_LOOKS_LIKE',
  ERROR_MOBILE_SERVICE_INVALID_INPUT: 'ERROR_MOBILE_SERVICE_INVALID_INPUT',
  ERROR_MOBILE_SERVICE_PLEASE_ENTER_EMAIL: 'ERROR_MOBILE_SERVICE_PLEASE_ENTER_EMAIL',
  ERROR_INVALID_CODE: 'ERROR_INVALID_CODE',
  ERROR_PASSWORD_PREVIOUSLY_USED: 'ERROR_PASSWORD_PREVIOUSLY_USED',
  ERROR_MOBILE_SERVICE_UNKNOWN_ERROR: 'ERROR_MOBILE_SERVICE_UNKNOWN_ERROR',
  ERROR_ALREADY_PAID_BILL: 'ERROR_ALREADY_PAID_BILL',
  ERROR_CHARGING_SELECTED_AMOUNT_OVERCHARGES_BILL_AMOUNT: 'ERROR_CHARGING_SELECTED_AMOUNT_OVERCHARGES_BILL_AMOUNT',
  ERROR_STRIPE_CONNECT_FAILED: 'ERROR_STRIPE_CONNECT_FAILED',
  ERROR_SENT_EMAIL_CANNOT_BE_REMOVED: 'ERROR_SENT_EMAIL_CANNOT_BE_REMOVED',
  ERROR_SENDING_EMAIL: 'ERROR_SENDING_EMAIL',
  ERROR_MOBILE_UNABLE_FETCH_ADDRESS: 'ERROR_MOBILE_UNABLE_FETCH_ADDRESS',
  ERROR_MOBILE_BLOCKED_USER: 'ERROR_MOBILE_BLOCKED_USER',
  ERROR_NO_VEHICLE_SUBSCRIPTION_EXISTS_FOR_THIS_VIOLATION: 'ERROR_NO_VEHICLE_SUBSCRIPTION_EXISTS_FOR_THIS_VIOLATION',
  ERROR_CREATING_VEHICLE: 'ERROR_CREATING_VEHICLE',
  ERROR_CANNOT_SORT_VEHICLES_BY_SELECTED_FIELD: 'ERROR_CANNOT_SORT_VEHICLES_BY_SELECTED_FIELD',
  ERROR_CANNOT_SORT_SUBSCRIBERS_BY_SELECTED_FIELD: 'ERROR_CANNOT_SORT_SUBSCRIBERS_BY_SELECTED_FIELD',
  ERROR_SUBSCRIBER_DOB_NOT_FOUND: 'ERROR_SUBSCRIBER_DOB_NOT_FOUND',
  ERROR_SUBSCRIPTION_NOT_FOUND: 'ERROR_SUBSCRIPTION_NOT_FOUND',
  ERROR_BILL_FOR_SUBSCRIPTION_NOT_FOUND: 'ERROR_BILL_FOR_SUBSCRIPTION_NOT_FOUND',
  ERROR_TEMPLATE_MUST_CONTAIN_PICKUP_OR_RETURN: 'ERROR_TEMPLATE_MUST_CONTAIN_PICKUP_OR_RETURN',
  ERROR_AGREEMENT_NOT_FOUND_FOR_SUBSCRIPTIONS: 'ERROR_AGREEMENT_NOT_FOUND_FOR_SUBSCRIPTIONS',
  ERROR_UNAUTHORIZED: 'ERROR_UNAUTHORIZED',
  ERROR_ONLY_CAN_CHANGE_VEHICLE_ON_PENDING_SUBSCRIPTIONS: 'ERROR_ONLY_CAN_CHANGE_VEHICLE_ON_PENDING_SUBSCRIPTIONS',
  ERROR_SUBSCRIPTION_ALREADY_EXIST_FOR_VEHICLE_AND_SUBSCRIBER: 'ERROR_SUBSCRIPTION_ALREADY_EXIST_FOR_VEHICLE_AND_SUBSCRIBER',
  ERROR_DEALER_CANNOT_BE_REMOVED_WHILE_ITS_INVENTORY_IS_IN_THE_SYSTEM: 'ERROR_DEALER_CANNOT_BE_REMOVED_WHILE_ITS_INVENTORY_IS_IN_THE_SYSTEM',
  ERROR_NO_LEGAL_AGREEMENT_ID_FOUND_FOR_ID: 'ERROR_NO_LEGAL_AGREEMENT_ID_FOUND_FOR_ID',
  ERROR_MALFORMED_PARAMETER: 'ERROR_MALFORMED_PARAMETER',
  ERROR_ALREADY_SWAP_REQUEST_IN_PROGRESS_NF: 'ERROR_ALREADY_SWAP_REQUEST_IN_PROGRESS_NF',
  ERROR_NO_VEHICLE_AND_SUBSCRIPTION_EXIST_FOR_THIS_PURCHASE: 'ERROR_NO_VEHICLE_AND_SUBSCRIPTION_EXIST_FOR_THIS_PURCHASE',
  ERROR_CREATING_OR_UPDATING_AGREEMENT: 'ERROR_CREATING_OR_UPDATING_AGREEMENT',
  ERROR_ALL_VEHICLES_FROM_LOCATION_MUST_BE_REMOVED_BEFORE_ITS_DELETION: 'ERROR_ALL_VEHICLES_FROM_LOCATION_MUST_BE_REMOVED_BEFORE_ITS_DELETION',
  ERROR_IS_WITH_PAYMENT_STRIPE: 'ERROR_IS_WITH_PAYMENT_STRIPE',
  ERROR_AGE_LESS_THAN_MINIMUM_LOCATION_AGE: 'ERROR_AGE_LESS_THAN_MINIMUM_LOCATION_AGE',
  ERROR_GETTING_PRICING_TERMS: 'ERROR_GETTING_PRICING_TERMS',
  ERROR_CALCULATING_TAXES_PRICING: 'ERROR_CALCULATING_TAXES_PRICING',
  ERROR_NOT_VALID_SEMVER: 'ERROR_NOT_VALID_SEMVER',
  ERROR_NO_SEMVER_EXIST_FOR_THIS_PLATFORM: 'ERROR_NO_SEMVER_EXIST_FOR_THIS_PLATFORM',
  ERROR_CURRENT_VERSION_IS_INVALID_SEMVER: 'ERROR_CURRENT_VERSION_IS_INVALID_SEMVER',
  ERROR_NO_PREVIOUS_CONFIG_EXIST_FOR_TAX: 'ERROR_NO_PREVIOUS_CONFIG_EXIST_FOR_TAX',
  ERROR_COULD_NOT_FIND_TAX_CACHE_FOR_THIS_LOCATION: 'ERROR_COULD_NOT_FIND_TAX_CACHE_FOR_THIS_LOCATION',
  ERROR_SUBSCRIBED_ID_ENTITY_PROVIDED_DOES_NOT_EXIST: 'ERROR_SUBSCRIBED_ID_ENTITY_PROVIDED_DOES_NOT_EXIST'
};
export default Errors;