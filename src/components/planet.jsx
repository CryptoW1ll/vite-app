import * as THREE from 'three';

// planet class
var radius = null;
var texture = null;
var distanceFromSun = null;

const sunRadius = 695700 / 20000;
var PlanetRadius = 0;

const segments = 64;

export default class Planet {

    static orbitalPeriodinYears = 0;
    static earthOrbitalPeriodMinutes = 365.25 * 1440; // Minutes in one Earth year
    static earthOrbitSpeed = 0.0001; // km/min
    
    //OrbitSpeed = 0;// = calculateOrbitSpeed(earthOrbitSpeed, earthOrbitalPeriodMinutes, mercuryOrbitalPeriodMinutes);

    // constructor
    constructor(_radius, _texture, _distanceFromSun, _orbitSpeed) {
        this.radius = _radius;
        this.texture = _texture;
        // if its earth,  call lat long grid

        this.distanceFromSun = _distanceFromSun;
        this.orbitSpeed = _orbitSpeed;
        this.currentAngle = 0; // Initialise currentAngle to start at 0 radians
        this.geometry = new THREE.SphereGeometry(this.radius, segments, segments);
        
        this.material = new THREE.MeshPhongMaterial({
            map: new THREE.TextureLoader().load(this.texture),
        });
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        
        this.mesh.position.set(this.distanceFromSun + sunRadius, 0, 0);

        //OrbitSpeed = calculateOrbitSpeed(earthOrbitSpeed, earthOrbitalPeriodMinutes, mercuryOrbitalPeriodMinutes);
    }

    getMesh() {
        return this.mesh;
    }

    updatePosition() {
        // Increment the angle based on the orbit speed
        this.currentAngle -= this.orbitSpeed;
    
        // Calculate the new position using trigonometric functions
        this.mesh.position.x = (this.distanceFromSun + sunRadius) * Math.cos(this.currentAngle);
        this.mesh.position.z = (this.distanceFromSun + sunRadius) * Math.sin(this.currentAngle);
    }
    
    //static calculateOrbitSpeed(earthSpeed, earthPeriod, planetPeriod) {
     //   return earthSpeed * Math.sqrt(earthPeriod / planetPeriod);
    //}
    // static get earthOrbitalPeriodMinutes() {
    //     return 365.25 * 1440; // Minutes in one Earth year
    // }

    // static get earthOrbitSpeed() {
    //     return 0.0001; // km/min
    // }
}

