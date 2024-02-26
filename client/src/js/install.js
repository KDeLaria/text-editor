const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    window.delayedPrompt = event;
    butInstall.classList.toggle("hidden", false);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const promptEvent = window.delayedPrompt;

    if (!promptEvent) {return;}

    promptEvent.prompt();

    window.delayedPrompt = null;

    butInstall.classList.toggle("hidden", true);
});


// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    event.preventDefault();
    window.delayedPrompt = null;
    butInstall.classList.toggle("hidden", true);
});


