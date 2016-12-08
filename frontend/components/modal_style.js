const customStyles = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(0, 0, 0, 0.60)'
  },
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',

    // position                   : 'absolute',
    // top                        : '40px',
    // left                       : '40px',
    // right                      : '40px',
    // bottom                     : '40px',
    background                 : '#fff',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    outline                    : 'none',
    padding                    : '0',
    borderRadius               : '20px',
    boxShadow                  : 'inset 0px 0px 34px 2px rgba(10,7,102,1)',
    border                     : '5px solid navy'
  }
};

export default customStyles;
