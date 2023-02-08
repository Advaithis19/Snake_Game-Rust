async function init() {
  const importObject = {
    console: {
      log: () => console.log("This is normal logging function..."),
      error: () => console.log("This is error logging function..."),
    },
  }

  const response = await fetch("sum.wasm")
  const buffer = await response.arrayBuffer()

  const wasm = await WebAssembly.instantiate(buffer, importObject)
  const sumFunction = wasm.instance.exports.sum
  const memory = wasm.instance.exports.memory
  const uint8Array = new Uint8Array(memory.buffer, 0, 2)
  const hiText = new TextDecoder().decode(uint8Array)
  alert("The result of addition is: " + sumFunction(200, 300))
  alert("Loaded message: " + hiText)
}

init()
