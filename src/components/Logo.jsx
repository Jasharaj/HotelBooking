import React from 'react'

function Logo({width='100px'}) {
  return (
    <div>
       <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 100 100">
          <circle cx="52" cy="52" r="44" opacity=".35"></circle><circle cx="50" cy="50" r="44" fill="#f2f2f2"></circle><path fill="#f2f2f2" d="M50,91C27.393,91,9,72.607,9,50S27.393,9,50,9s41,18.393,41,41S72.607,91,50,91z"></path><circle cx="50.026" cy="50.026" r="38.026" fill="#96c362"></circle><circle cx="50" cy="50" r="37.5" fill="none" stroke="#40396e" stroke-miterlimit="10" stroke-width="3"></circle><g><path fill="#f2f2f2" d="M42.017,65c-0.767,0-1.534-0.292-2.119-0.877l-10.017-10c-1.173-1.17-1.175-3.07-0.004-4.243 c1.17-1.173,3.07-1.175,4.242-0.003l7.896,7.882l23.881-23.88c1.172-1.172,3.07-1.172,4.242,0c1.172,1.171,1.172,3.071,0,4.242 l-26,26C43.552,64.707,42.784,65,42.017,65z"></path></g>
        </svg>
    </div>
  )
}

export default Logo
