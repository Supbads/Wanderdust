var AllParticlesValue = document.getElementById('All Particles Value');
var IdleParticlesValue = document.getElementById('Idle Particles Value');

var SpawnIdleParticles = document.getElementById('Spawn Idle Particles');

var MaxParticles = document.getElementById('Max Particles');
var MaxParticlesValue = document.getElementById('Max Particles Value');

var MaxIdleParticles = document.getElementById('Max Idle Particles');
var MaxIdleParticlesValue = document.getElementById('Max Idle Particles Value');

// Attach click events to the controls
function attachControls() {
    SpawnIdleParticles.checked = Options.SpawnIdleParticles;
    SpawnIdleParticles.onchange = toggleSpawnIdleParticles;

    MaxParticles.value = Options.MaxParticles;
    MaxParticles.onchange = onChangeMaxParticles;
    MaxParticlesValue.innerHTML = Options.MaxParticles;

    MaxIdleParticles.value = Options.MaxIdleParticles;
    MaxIdleParticles.onchange = onChangeMaxIdleParticles;
    MaxIdleParticlesValue.innerHTML = Options.MaxIdleParticles;
}

// Clear current points
function clearParticles() {
    particles = [];
}

// Update the shown values
function updateShownValues() {
    AllParticlesValue.innerHTML = particles.length;
    IdleParticlesValue.innerHTML = particles.filter(p => p.movement.idle).length;
}

// Toggles spawning moving
function toggleSpawnIdleParticles(e) {
    clearParticles();
    // Change the options value
    Options.SpawnIdleParticles = e.target.checked;
}

// Change max particles limit
function onChangeMaxParticles(e) {
    Options.MaxParticles = e.target.value;
    MaxParticlesValue.innerHTML = Options.MaxParticles;
}

// Change idle particles limit
function onChangeMaxIdleParticles(e) {
    Options.MaxIdleParticles = e.target.value;
    MaxIdleParticlesValue.innerHTML = Options.MaxIdleParticles;
}
