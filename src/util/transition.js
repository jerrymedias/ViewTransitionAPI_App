import { useNavigate } from "react-router-dom"

export function useNavigateWithTransition() {
    const navigate = useNavigate()
    function transition(route, options = {}) {
        // Check to see if API is supported and also if skiptransition is disabled
        if (document.startViewTransition) {
            console.log("StartViewTransitionPresent")

            //decide whether to use backward transition or forward transition and select the root element
            //and give it the viewTransitionName which you have decided to use
            const rootElementRef = document.getElementById("root")
            rootElementRef.style.viewTransitionName =
                route === -1 ? "backward-navigation" : "forward-navigation"

            // start transition
            console.log("StartViewTransitionInvoked")
            const viewTransition = document.startViewTransition(function updateCallback() {
                console.log("StartViewTransitionCallbackInvoked", route)

                //React
                delete options.skipTransition
                navigate(route, options)

                //Angular
                // this.router.navigateByUrl(route)

                console.log("StartViewTransitionCallbackFinished")
            })
            console.log("StartViewTransitionReturningAtransitionObject", viewTransition)

            //The updateCallbackDone read-only property of the ViewTransition interface is a Promise
            //that fulfills when the promise returned by the document.startViewTransition()'s callback fulfills, or rejects when it rejects.
            //updateCallbackDone is useful when you don't care about the success/failure of the transition animation, and just want to know if and when the DOM is updated.
            viewTransition.updateCallbackDone.then(() => {
                console.log("StartViewTransitionUpdateCallbackDone")
            })

            // A Promise that fulfills once the pseudo-element tree is created and the transition animation is about to start.
            viewTransition.ready.then(() => {
                /// Animate the root's new view
                console.log("StartViewTransitionReady")

                window.scrollTo({ top: 0, left: 0, behavior: "auto" })
            })

            //A Promise that fulfills once the transition animation is finished, and the new page view is visible and interactive to the user.
            viewTransition.finished.then(() => {
                // Clear the temporary tag
                console.log("StartViewTransitionFinished")
                if (rootElementRef) rootElementRef.style.viewTransitionName = ""
            })

            //Skip the animation part of the transition.
            if (options.skipTransition) {
                viewTransition.skipTransition()
            }
        } else {
            // fallback for old browser
            console.log("StartViewTransitionNotPresent")
            delete options.skipTransition
            navigate(route, options)
        }
    }

    return transition
}