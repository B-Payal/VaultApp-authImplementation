## Observed behaviours

# 1
When we are clicking on dashboard button event without logging in we are able to access the page that means protected routes are not implemented.


# 2

Like the dashboard page , the settings page can also be accessed without logging in hence acting as a security issue

# 3
Login button is not working correctly due to the wrong implementation in current code base;

## Root Cause Analysis — Bug 1

 The app was not wrapped in AuthProvider thus the components using authcontext were getting stale data or undefined. But all values in authContext are correctly exposed. 

 ## Root Cause Analysis — Bug 2

 Login function was not storing token and user details in local storage and log out was not clearing that.
  
 UseEffect was not used in authContext for setting states when the component mounts.

 ## Root Cause Analysis — Bug 3

 The private routes in app.jsx are not wrapped in an authentication component and right now even an unauthenticated user is able to access those pages.
