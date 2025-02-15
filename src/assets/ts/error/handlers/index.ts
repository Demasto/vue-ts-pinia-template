import axios, { AxiosError } from 'axios'
import { notify } from '@kyvg/vue3-notification'
import { TEXT } from "@/assets/ts/constant-base";

type StatusCodeDict = {
  [statusCode: number]: string|undefined
}

const statusCodeDict: StatusCodeDict = {
  400: 'Некорректный запрос',
  401: 'Необходима авторизация',
  403: 'Недостаточно прав',
  408: 'Истекло время ожидания ответа от сервера', //Request Timeout
  404: 'Ресурс не найден',
  429: 'Слишком много запросов',
  500: 'Внутренняя ошибка сервера'
}
export function notifyError(e: unknown) {
  if(e) {
    const text = ErrorAsMessage(e)
    if(text) {
      notify({text, type: 'error'})
      return
    }
  }
  console.error('Отсутствует текст ошибки')
}
export function notifySuccess(message: string) {
  notify({text: message, type: 'success'})
}

export function ErrorAsMessage(e: unknown)  {
  if(!e)
    return ''

  if(axios.isAxiosError(e))
    return messageFromStatus(e)

  // else if(e instanceof ApiError)
  //   return e.message

  else if(e instanceof Error)
    return handleMessage(e.message)

  else if(typeof e == 'string')
    return handleMessage(e)

  console.error(`Unexpected message ${typeof e} - ${JSON.stringify(e)}`)

  return ''
}

function messageFromStatus(e: AxiosError) {

  if(e.code == "ECONNABORTED") {
    return TEXT.API.TIMEOUT
  }

  if(e.status == undefined) {
    console.error(`status == undefined - ${JSON.stringify(e)}`)
    return handleMessage(e.message)
  }

  const message = statusCodeDict[e.status]
  if(message == undefined) {
    console.error(`Unexpected status ${e.status} - ${JSON.stringify(e)}`)
  }

  return handleMessage(e.message)
}

function handleMessage(message: string) {
  if(message.includes('timeout')) {
    return TEXT.API.TIMEOUT
  }
  return message
}
