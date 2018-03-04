### Notes
Didn't succeed to run it for iOS, faced the following error:

```
Command failed: /usr/libexec/PlistBuddy -c Print:CFBundleIdentifier build/Build/Products/Debug-iphonesimulator/testApp.app/Info.plist
Print: Entry, ":CFBundleIdentifier", Does Not Exist

```


Also you can find one bug - there is no custom handling of the Back button, so when you go back, root is not updated in the redux store.

##### Steps to reproduce:
1. Log in
2. navigate to the Log out screen
3. press the Back button
4. try to navigate to the Log out screen again

You won't be able to do this because root in the store is still Log out.
