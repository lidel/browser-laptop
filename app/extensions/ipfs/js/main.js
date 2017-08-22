// const ipc = window.chrome.ipcRenderer

chrome.protocol.registerStringProtocol('ipfs', handler)
chrome.protocol.registerStringProtocol('dweb', handler)

function handler (request, callback) {
  // test to check if handling the protocol works
  callback('hi there!' + test()) // eslint-disable-line

  /*
  const node = new Ipfs()
  node.on('ready', () => {
    callback('hi there!' + test() + Ipfs) // eslint-disable-line
  })
  */
  // test loading Ipfs into the background process scope
  // callback('hi there!' + test() + Ipfs.toString()) // eslint-disable-line
}
