import error from '../module/errors'
import { isObject, isString } from 'is-what'

/**
 * gets an ID from a single piece of payload.
 *
 * @export
 * @param {(object | string)} payloadPiece
 * @param {object} [conf] (optional - for error handling) the vuex-easy-access config
 * @param {string} [path] (optional - for error handling) the path called
 * @param {(object | any[] | string)} [fullPayload] (optional - for error handling) the full payload on which each was `getId()` called
 * @returns {string} the id
 */
export function getId (
  payloadPiece: object | string,
  conf?: object,
  path?: string,
  fullPayload?: object | any[] | string
): string {
  if (isObject(payloadPiece)) {
    if (isObject(payloadPiece) && payloadPiece.id) return payloadPiece.id
    if (Object.keys(payloadPiece).length === 1) return Object.keys(payloadPiece)[0]
  }
  if (isString(payloadPiece)) return payloadPiece
  error('missingId')
  return ''
}

/**
 * Returns a value of a payload piece. Eg. {[id]: 'val'} will return 'val'
 *
 * @param {*} payloadPiece
 * @returns {*} the value
 */
export function getValueFromPayloadPiece (payloadPiece: any): any {
  if (
    isObject(payloadPiece) &&
    !payloadPiece.id &&
    Object.keys(payloadPiece).length === 1
  ) {
    return Object.values(payloadPiece)[0]
  }
  return payloadPiece
}