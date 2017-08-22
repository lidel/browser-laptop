// const ipc = window.chrome.ipcRenderer

chrome.protocol.registerStringProtocol('ipfs', (request, callback) => {
  /*
  const node = new IPFS()
  node.on('ready', () => {
    callback('hi there!' + test() + IPFS) // eslint-disable-line
  })
  */
  callback('hi there!' + test() + IPFS) // eslint-disable-line
})
