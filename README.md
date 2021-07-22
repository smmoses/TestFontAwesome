
# Build
Run `npm i`. 

# Test
Run `ng serve -o`. The application won't compile. You will get the error "NG8002: Can't bind to 'icon' since it isn't a known property of 'fa-icon'."
Go to app/test/test.component.html and comment out the line with the fa-icon. Save, and the application will run. You will see the application routing is working, and the 
fontawesome icon in app component works.

If you look at test.module.ts, the import for FontAwesomeModule is there, and the declaration for TestComponent is there.
