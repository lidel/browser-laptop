/* global Ipfs */

// const ipc = window.chrome.ipcRenderer

chrome.protocol.registerStringProtocol('ipfs', handler)
chrome.protocol.registerStringProtocol('dweb', handler)

function handler (request, callback) {
  // test to check if handling the protocol works
  // callback('hi there!' + test()) // eslint-disable-line

  const node = new Ipfs()

  node.on('ready', () => {
    node.files.cat('QmSmuETUoXzh4Qo5upHxJWZJK8AEpXXZdTqs34ttE3qMYn', (err, stream) => {
      if (err) {
        return callback('failed to get the hash')
      }
      let buf = ''
      stream.on('data', (data) => {
        buf += data.toString()
      })
      stream.on('end', () => {
        callback(buf)
      })
    })
    // callback('I am online!') // eslint-disable-line
  })

  // test loading Ipfs into the background process scope
  // callback('hi there!' + test() + Ipfs.toString()) // eslint-disable-line
}
