import React from 'react'

const FooterNew = () => {
    const today = new Date();
    
  return (
 <footer>
     <p>Copyright &copy; {today.getFullYear()}</p>
 </footer>
  )
}

export default FooterNew