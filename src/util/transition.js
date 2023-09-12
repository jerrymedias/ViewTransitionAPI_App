import { useNavigate } from "react-router-dom"

export function useNavigateWithTransition() {
    const navigate = useNavigate()
    function transition(route, options = {}) {
        // Check to see if API is supported
        if (document.startViewTransition) {

            //Assign transition name to the 
            const rootElementRef = document.documentElement
            rootElementRef.style.viewTransitionName = options.transitionName

            // start transition
            const viewTransition = document.startViewTransition(updateCallback)

            function updateCallback() {
                //React
                delete options.skipTransition
                delete options.transitionName
                navigate(route, options)

                //Angular
                // router.navigateByUrl(route)
            }

            viewTransition.updateCallbackDone.then(() => {
                console.log("StartViewTransitionUpdateCallbackDone")
            })

            // A Promise that fulfills once the pseudo-element tree is created and the transition animation is about to start.
            viewTransition.ready.then(() => {
                window.scrollTo({ top: 0, left: 0, behavior: "auto" })
            })

            //A Promise that fulfills once the transition animation is finished, and the new page view is visible and interactive to the user.
            viewTransition.finished.then(() => {
                // Clear the temporary tag
                if (rootElementRef) rootElementRef.style.viewTransitionName = ""
            })

            //Skip the animation part of the transition.
            if (options.skipTransition) {
                viewTransition.skipTransition()
            }
        } else {
            // fallback for old browser
            delete options.skipTransition
            delete options.transitionName
            navigate(route, options)
        }
    }

    return transition
}