import text from './text.mjs'
import arrayBuffer from './array-buffer.mjs'
import stream from './stream.mjs'

const {prototype} = Blob
const {getOwnPropertyDescriptor, defineProperty} = Reflect

function shim(key, value) {
  if (!getOwnPropertyDescriptor(prototype, key)) {
    defineProperty(prototype, key, {
      writable: true,
      enumerable: true,
      configurable: true,
      value,
    })
  }
}

shim('text', text)
shim('arrayBuffer', arrayBuffer)
shim('stream', stream)
