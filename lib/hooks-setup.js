FormHandler.addGlobalHook('onInitializeForm', function (formId) {
    App.store.dispatch(App.actions.forms.initializeForm(formId));
});

FormHandler.addGlobalHook('onInitializeInput', function (formId, inputName, value) {
    App.store.dispatch(App.actions.forms.initializeInput(formId, inputName, value));
});

FormHandler.addGlobalHook('onInputChanged', function (formId, inputName, value) {
    App.store.dispatch(App.actions.forms.inputChanged(formId, inputName, value));
});