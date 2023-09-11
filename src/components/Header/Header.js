import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"
import { useNavigateWithTransition } from "../../util/transition";
import css from "./Header.module.css"

const arrowLeft24Primary = (
  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fillRule="evenodd">
          <path fill="none" d="M0 24h24V0H0z" />
          <path
              d="M19.504 11.335H5.82l7.501-7.502a.665.665 0 000-.942.665.665 0 00-.942 0L4.211 11.06a1.334 1.334 0 000 1.885l8.186 8.185a.667.667 0 00.943-.942l-7.52-7.519h13.684a.666.666 0 100-1.333"
              fill="#3B3B3B"
          />
      </g>
  </svg>
)

const Header = () => {
  const location = useLocation()
  const navigate = useNavigateWithTransition()

  const [showbackButton, setShowbackButton] = useState(false)

  useEffect(() => {
    setShowbackButton(location.pathname !== "/")
  }, [location.pathname])
  
  return(
    <header className={`masthead clear ${css.mainHeader}`} style={{height: "48px", marginBottom: "16px", display: "flex", alignItems: "center", position: "sticky", top: "0px", zIndex: "1"}}>
      <div style={{display: "flex", alignItems: "center", padding: "8px"}}>
        {showbackButton && <div onClick={() => {
          navigate(-1, {transitionName: "backward-transition"})
        }}>{arrowLeft24Primary}</div>}
        <div className="site-branding" style={{marginLeft: "8px"}}>
          <div style={{margin: "unset", fontSize: "24px", fontWeight: "600"}}>I love dogs</div>
        </div>
      </div>
    </header>
  )
};

export default Header;
