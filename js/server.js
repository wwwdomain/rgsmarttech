
        gsap.registerPlugin(ScrollTrigger);
        const isMobile = window.innerWidth < 1024;

        // --- CUSTOM TOAST NOTIFICATION MOTOR ---
        function showCustomToast(msg) {
            const toast = document.getElementById('toast-notification');
            document.getElementById('toast-message').textContent = msg;
            toast.classList.remove('translate-x-72', 'opacity-0');
            setTimeout(() => {
                toast.classList.add('translate-x-72', 'opacity-0');
            }, 4000);
        }

        // --- ASYNCHRONOUS SECURE AJAX DISPATCH HANDLING ENGINE ---
        document.getElementById('secure-form').addEventListener('submit', async function(e) {
            e.preventDefault();
            const form = this;
            const btn = document.getElementById('submit-btn');
            const originalHTML = btn.innerHTML;

            // Visual AJAX initialization triggers
            btn.disabled = true;
            btn.innerHTML = `<i class="fa-solid fa-circle-notch animate-spin text-sm"></i> <span>ENCRYPTING DATA PACKETS...</span>`;
            btn.classList.add('opacity-80');

            // Gather standard form parameters
            const dataPayload = {
                identity: form.identity.value,
                email: form.email.value,
                requirements: form.requirements.value
            };

            try {
                // Performing clean mock-AJAX pipeline request architecture
                // Switch out url target endpoint string structure parameter as desired later
                const serverResponse = await new Promise((resolve) => {
                    setTimeout(() => {
                        resolve({ status: 200, message: "Secure transmission channel locked." });
                    }, 1800);
                });

                if(serverResponse.status === 200) {
                    // Update layout components asynchronously to display beautiful success verification matrix
                    btn.innerHTML = `<i class="fa-solid fa-check text-sm"></i> <span>TRANSMISSION COMPLETE</span>`;
                    btn.classList.remove('from-cyberBlue', 'to-blue-600', 'opacity-80');
                    btn.classList.add('bg-green-500', 'text-white');

                    showCustomToast("Data pipeline packages sent to rgsmarttech.in@gmail.com");
                    form.reset();

                    setTimeout(() => {
                        btn.disabled = false;
                        btn.innerHTML = originalHTML;
                        btn.classList.remove('bg-green-500', 'text-white');
                        btn.classList.add('from-cyberBlue', 'to-blue-600');
                    }, 3500);
                }
            } catch (err) {
                btn.disabled = false;
                btn.innerHTML = `<span>TRANSMISSION ERROR</span>`;
                showCustomToast("Pipeline sync exception encountered.");
            }
        });

        // --- CUSTOM CUSTOMER ENTRANCE SCROLL REVEAL OBSERVER ---
        const observerOptions = { threshold: 0.15, rootMargin: "0px 0px -50px 0px" };
        const scrollObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);
        document.querySelectorAll('.reveal-element').forEach(el => scrollObserver.observe(el));

        // --- MOBILE NAV ELEMENT INTERFACES ---
        const menuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenuDrawer = document.getElementById('mobile-menu-drawer');
        const line1 = menuBtn.querySelector('.raw-line-1');
        const line2 = menuBtn.querySelector('.raw-line-2');
        const line3 = menuBtn.querySelector('.raw-line-3');

        menuBtn.addEventListener('click', () => {
            const isHidden = mobileMenuDrawer.classList.contains('hidden');
            if (isHidden) {
                mobileMenuDrawer.classList.remove('hidden');
                setTimeout(() => mobileMenuDrawer.classList.add('opacity-100'), 10);
                line1.style.transform = 'rotate(45deg) translate(5px, 5px)';
                line2.style.opacity = '0';
                line3.style.transform = 'rotate(-45deg) translate(5px, -5px)';
            } else {
                mobileMenuDrawer.classList.remove('opacity-100');
                line1.style.transform = 'none';
                line2.style.opacity = '1';
                line3.style.transform = 'none';
                setTimeout(() => mobileMenuDrawer.classList.add('hidden'), 300);
            }
        });

        document.querySelectorAll('.mobile-nav-item').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuDrawer.classList.remove('opacity-100');
                line1.style.transform = 'none';
                line2.style.opacity = '1';
                line3.style.transform = 'none';
                setTimeout(() => mobileMenuDrawer.classList.add('hidden'), 300);
            });
        });

        window.addEventListener('scroll', () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = (winScroll / height) * 100;
            document.getElementById('scroll-progress-bar').style.width = scrolled + "%";
        });

        // --- 1. THREE.JS BOOTSTRAP ENVIRONMENT ---
        const container = document.getElementById('webgl-container');
        const scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(0x050505, 0.06);

        // NARROW FOV (24) PREVENTS PERSPECTIVE SKEWING DISPLACEMENT LOOKING FULLY STRAIGHT
        const camera = new THREE.PerspectiveCamera(24, window.innerWidth / window.innerHeight, 0.1, 100);
        camera.position.set(0, 0, 15.5);

        const renderer = new THREE.WebGLRenderer({
            antialias: !isMobile, 
            alpha: true,
            powerPreference: "high-performance"
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(isMobile ? 1 : Math.min(window.devicePixelRatio, 2));
        renderer.shadowMap.enabled = !isMobile;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.3;
        container.appendChild(renderer.domElement);

        // --- 2. ADVANCED LIGHT MATRIX ---
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.15);
        scene.add(ambientLight);

        const keyLight = new THREE.DirectionalLight(0x00C8FF, 3.5);
        keyLight.position.set(6, 10, 6);
        scene.add(keyLight);

        const rimLight = new THREE.DirectionalLight(0x7c3aed, 2.8);
        rimLight.position.set(-6, -4, -4);
        scene.add(rimLight);

        const deckBacklight = new THREE.PointLight(0x00C8FF, 3.5, 3.0);
        deckBacklight.position.set(0, 0.12, 0.2);
        scene.add(deckBacklight);

        // --- 3. CANVAS TEXTURE GRAPHICS CORE MAPPING INTERFACE ---
        const screenCanvas = document.createElement('canvas');
        screenCanvas.width = 1024;
        screenCanvas.height = 640;
        const screenCtx = screenCanvas.getContext('2d');
        const screenTexture = new THREE.CanvasTexture(screenCanvas);

        let screenMode = 'assistant';
        let ticker = 0;

        const matrixColumns = Math.floor(screenCanvas.width / 16);
        const matrixDrops = Array(matrixColumns).fill(1);

        function updateScreenCanvas() {
            ticker++;
            if (screenMode === 'matrix') {
                screenCtx.fillStyle = 'rgba(5, 10, 18, 0.16)'; 
                screenCtx.fillRect(0, 0, screenCanvas.width, screenCanvas.height);
            } else {
                screenCtx.fillStyle = '#050a12';
                screenCtx.fillRect(0, 0, screenCanvas.width, screenCanvas.height);
            }

            if (screenMode !== 'matrix') {
                screenCtx.strokeStyle = 'rgba(0, 200, 255, 0.04)';
                screenCtx.lineWidth = 1;
                for (let i = 0; i < screenCanvas.height; i += 16) {
                    screenCtx.beginPath();
                    screenCtx.moveTo(0, i);
                    screenCtx.lineTo(screenCanvas.width, i);
                    screenCtx.stroke();
                }
            }

            if (screenMode === 'assistant') {
                const cx = screenCanvas.width / 2;
                const cy = screenCanvas.height / 2 - 20;
                const scaleRad = 110 + Math.sin(ticker * 0.05) * 10;

                screenCtx.strokeStyle = '#00C8FF';
                screenCtx.lineWidth = 4;
                screenCtx.beginPath();
                screenCtx.arc(cx, cy, scaleRad, 0, Math.PI * 2);
                screenCtx.stroke();

                screenCtx.fillStyle = '#ffffff';
                screenCtx.font = 'bold 38px "Orbitron", sans-serif';
                screenCtx.textAlign = 'center';
                screenCtx.textBaseline = 'middle';
                screenCtx.fillText('RG SMART TECH', cx, cy);

                screenCtx.fillStyle = '#00C8FF';
                screenCtx.font = '14px "Orbitron", sans-serif';
                screenCtx.fillText('SECURE INFRASTRUCTURE ENGINE ACTIVE', cx, cy + 35);
            }
            else if (screenMode === 'diagnostics') {
                screenCtx.fillStyle = '#00C8FF';
                screenCtx.font = 'bold 24px "Orbitron", sans-serif';
                screenCtx.textAlign = 'left';
                screenCtx.fillText('> COMPUTE PIPELINES NODE ONLINE', 60, 80);

                const stats = [
                    `SYSTEM FREQUENCY LAYER: STABLE AT ${4.9 + Math.sin(ticker * 0.08) * 0.1} GHz`,
                    `ASYNC DATA STREAM PIPELINE: ACTIVE COROUTINES EXECUTING`,
                    `SURVEILLANCE FIREWALL LOOP: 100% OPERATIONAL`,
                    `MAIL TERMINAL TARGET ROUTE: rgsmarttech.in@gmail.com`,
                    `_`
                ];
                stats.forEach((line, idx) => {
                    screenCtx.fillStyle = idx === 4 ? '#7c3aed' : 'rgba(255, 255, 255, 0.85)';
                    screenCtx.font = '16px monospace';
                    if (idx === 4 && ticker % 30 < 15) return; 
                    screenCtx.fillText(line, 60, 160 + (idx * 55));
                });
            }
            else if (screenMode === 'matrix') {
                screenCtx.fillStyle = '#00C8FF';
                screenCtx.font = 'bold 15px monospace';
                screenCtx.textAlign = 'left';

                for (let i = 0; i < matrixDrops.length; i++) {
                    const character = String.fromCharCode(0x30A0 + Math.random() * 96);
                    const posX = i * 16;
                    const posY = matrixDrops[i] * 16;
                    screenCtx.fillText(character, posX, posY);

                    if (posY > screenCanvas.height && Math.random() > 0.98) {
                        matrixDrops[i] = 0;
                    }
                    matrixDrops[i]++;
                }
            }
            else if (screenMode === 'lockdown') {
                screenCtx.fillStyle = '#ffffff';
                screenCtx.font = 'bold 34px "Orbitron", sans-serif';
                screenCtx.textAlign = 'center';
                screenCtx.fillText('ENCRYPTION LOCK OVERRIDE', screenCanvas.width / 2, screenCanvas.height / 2 - 20);

                screenCtx.fillStyle = '#e11d48'; 
                screenCtx.font = '15px "Orbitron", sans-serif';
                screenCtx.fillText('REMOTE TRANSFERS ENCRYPTED SECURELY', screenCanvas.width / 2, screenCanvas.height / 2 + 25);
            }
            screenTexture.needsUpdate = true;
        }

        function setScreenMode(mode) {
            screenMode = mode;
        }

        // --- 4. 3D LAPTOP HARDWARE GEOMETRY ARCHITECTURE ---
        const laptopGroup = new THREE.Group();
        const premiumSilverAlloy = new THREE.MeshStandardMaterial({
            color: 0xD9D9D9, metalness: 0.95, roughness: 0.15, clearcoat: 0.3
        });
        const darkBorderPlastic = new THREE.MeshStandardMaterial({ color: 0x0a0c10, roughness: 0.5 });

        const globalGroup = new THREE.Group();
        const gsapGroup = new THREE.Group();
        const mouseGroup = new THREE.Group();

        scene.add(globalGroup);
        globalGroup.add(gsapGroup);
        gsapGroup.add(mouseGroup);
        mouseGroup.add(laptopGroup);

        // Ambient Aura Target Ring
        const ringGeom = new THREE.RingGeometry(2.6, 2.72, 64);
        const ringMat = new THREE.MeshBasicMaterial({ color: 0x00C8FF, side: THREE.DoubleSide, transparent: true, opacity: 0.18 });
        const holoRing = new THREE.Mesh(ringGeom, ringMat);
        holoRing.rotation.x = Math.PI / 2;
        holoRing.position.y = -0.08;
        gsapGroup.add(holoRing);

        // Lower System Chassis Base Mesh Setup
        const mainBaseGeom = new THREE.BoxGeometry(4.2, 0.09, 2.8);
        const mainBaseMesh = new THREE.Mesh(mainBaseGeom, premiumSilverAlloy);
        mainBaseMesh.position.set(0, -0.045, 0); 
        laptopGroup.add(mainBaseMesh);

        // Reccesed Input Keypad Matrix Plate Plate
        const trayGeom = new THREE.BoxGeometry(3.8, 0.002, 1.45);
        const trayMat = new THREE.MeshStandardMaterial({ color: 0x0b0d11, roughness: 0.6 });
        const trayMesh = new THREE.Mesh(trayGeom, trayMat);
        trayMesh.position.set(0, 0.0011, -0.45);
        laptopGroup.add(trayMesh);

        // High Performance Instanced Keycap Array
        const rowsCount = 5, colsCount = 14, totalKeys = rowsCount * colsCount;
        const singleKeyGeom = new THREE.BoxGeometry(0.22, 0.02, 0.19);
        const singleKeyMat = new THREE.MeshStandardMaterial({ color: 0x08090c, roughness: 0.4,emissive: 0x00C8FF,emissiveIntensity: 0.6 });
        const instancedKeysMesh = new THREE.InstancedMesh(singleKeyGeom, singleKeyMat, totalKeys);

        let keyIndex = 0;
        const keyObjectDummy = new THREE.Object3D();
        for (let r = 0; r < rowsCount; r++) {
            for (let c = 0; c < colsCount; c++) {
                if (r === 4 && c >= 4 && c <= 9) continue; 
                keyObjectDummy.position.set(-1.68 + c * 0.26, 0.012, -0.45 + (r * 0.26) - 0.52);
                keyObjectDummy.updateMatrix();
                instancedKeysMesh.setMatrixAt(keyIndex++, keyObjectDummy.matrix);
            }
        }
        laptopGroup.add(instancedKeysMesh);

        // Lower Chassis Hinge Assembly Module
        const cylindricalHingeGeom = new THREE.CylinderGeometry(0.045, 0.045, 4.0, 32);
        const cylindricalHingeMat = new THREE.MeshStandardMaterial({ color: 0x08090d, metalness: 0.8 });
        const hingeMesh = new THREE.Mesh(cylindricalHingeGeom, cylindricalHingeMat);
        hingeMesh.rotation.z = Math.PI / 2;
        hingeMesh.position.set(0, 0.046, -1.38);
        laptopGroup.add(hingeMesh);

        // Upper Screen Lid Pivoting Core Component Node
        const lidGroup = new THREE.Group();
        lidGroup.position.set(0, 0.046, -1.38); 
        laptopGroup.add(lidGroup);

        const outerLidGeom = new THREE.BoxGeometry(4.2, 0.04, 2.8);
        const outerLidMesh = new THREE.Mesh(outerLidGeom, premiumSilverAlloy);
        outerLidMesh.position.set(0, 0.02, 1.4); 
        lidGroup.add(outerLidMesh);

        const bezelFrameGeom = new THREE.BoxGeometry(4.16, 0.002, 2.76);
        const bezelFrameMesh = new THREE.Mesh(bezelFrameGeom, darkBorderPlastic);
        bezelFrameMesh.position.set(0, -0.0201, 1.4);
        lidGroup.add(bezelFrameMesh);

        const screenPlaneGeom = new THREE.PlaneGeometry(4.1, 2.7);
        screenPlaneGeom.rotateX(Math.PI / 2); 
        const screenPlaneMat = new THREE.MeshBasicMaterial({ map: screenTexture, side: THREE.DoubleSide });
        const screenPlaneMesh = new THREE.Mesh(screenPlaneGeom, screenPlaneMat);
        screenPlaneMesh.position.set(0, -0.0212, 1.4);
        lidGroup.add(screenPlaneMesh);

        // Set baseline inclination open angle properties
        lidGroup.rotation.x = -1.85; 

        // --- 5. FLOATING COMPUTE PARTICLE ATMOSPHERE MATRIX ---
        const particleTotal = isMobile ? 50 : 200;
        const particleArrayGeom = new THREE.BufferGeometry();
        const positions = new Float32Array(particleTotal * 3);
        for(let i = 0; i < particleTotal * 3; i += 3) {
            positions[i] = (Math.random() - 0.5) * 15;
            positions[i+1] = (Math.random() - 0.5) * 15;
            positions[i+2] = (Math.random() - 0.5) * 15;
        }
        particleArrayGeom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        const particleTextureMat = new THREE.PointsMaterial({
            size: isMobile ? 0.05 : 0.03, color: 0x00C8FF, transparent: true, opacity: 0.3
        });
        const dynamicHoloParticles = new THREE.Points(particleArrayGeom, particleTextureMat);
        scene.add(dynamicHoloParticles);

        // --- 6. GSAP CHOREOGRAPHY CHANNELS (ROTATIONS STATICALLY SECURED AT ZERO) ---
        const responsiveMediaMatch = gsap.matchMedia();
        responsiveMediaMatch.add({
            isDesktop: "(min-width: 1024px)",
            isMobile: "(max-width: 1023px)"
        }, (context) => {
            const { isDesktop } = context.conditions;
            const scrollTimeline = gsap.timeline({
                scrollTrigger: {
                    trigger: "#scroll-wrapper", start: "top top", end: "bottom bottom", scrub: 1.0,
                }
            });

            // Y and Z rotations are locked strictly to 0 to provide a perfectly flat, distortion-free straight orientation
            if (isDesktop) {
                scrollTimeline.to(gsapGroup.position, { z: 0.5, duration: 2.5 })
                  .to(gsapGroup.rotation, { x: 0.15, y: 0, z: 0, duration: 2.5 }, "<")
                  .to(lidGroup.rotation, { x: -1.82, duration: 2.5 }, "<");

                scrollTimeline.to(gsapGroup.position, { z: 1.0, duration: 2.5 })
                  .to(gsapGroup.rotation, { x: 0.08, y: 0, z: 0, duration: 2.5 }, "<")
                  .to(lidGroup.rotation, { x: -1.98, duration: 2.5 }, "<");

                scrollTimeline.to(gsapGroup.position, { z: 1.5, duration: 2.5 })
                  .to(gsapGroup.rotation, { x: 0.18, y: 0, z: 0, duration: 2.5 }, "<");

                scrollTimeline.to(gsapGroup.position, { z: 2.0, duration: 2.5 })
                  .to(gsapGroup.rotation, { x: 0.1, y: 0, z: 0, duration: 2.5 }, "<");

                scrollTimeline.to(gsapGroup.position, { z: 2.8, duration: 3.0 })
                  .to(gsapGroup.rotation, { x: 0.32, y: 0, z: 0, duration: 3.0 }, "<")
                  .to(lidGroup.rotation, { x: -0.15, duration: 3.0 }, "<");
            } else {
                scrollTimeline.to(gsapGroup.position, { z: 0.3, duration: 4.0 })
                  .to(gsapGroup.rotation, { x: 0.18, y: 0, z: 0, duration: 4.0 }, "<");

                scrollTimeline.to(gsapGroup.position, { z: 0.6, duration: 4.0 })
                  .to(gsapGroup.rotation, { x: 0.12, y: 0, z: 0, duration: 4.0 }, "<");

                scrollTimeline.to(gsapGroup.position, { z: 1.2, duration: 4.0 })
                  .to(gsapGroup.rotation, { x: 0.25, y: 0, z: 0, duration: 4.0 }, "<")
                  .to(lidGroup.rotation, { x: -0.15, duration: 4.0 }, "<");
            }
        });

        // --- 7. FLUID SPATIAL REPOSITIONING VECTOR SYSTEMS ---
        const sectionsLayoutMap = {
            hero: document.querySelector('#hero .reveal-element'),
            services: document.querySelector('#services .reveal-element'),
            features: document.querySelector('#features .reveal-element'),
            about: document.querySelector('#about .reveal-element'),
            portal: document.querySelector('#portal .reveal-element'),
            contact: document.querySelector('#contact .reveal-element')
        };

        function getSectionTargetPos(sectionId, isDesktop) {
            const elContainer = sectionsLayoutMap[sectionId];
            if (!elContainer) return { x: window.innerWidth / 2, y: window.innerHeight / 2 };

            const rect = elContainer.getBoundingClientRect();
            let targetX = window.innerWidth / 2;
            let targetY = window.innerHeight / 2;

            if (isDesktop) {
                const visibleHeightAtZ0 = 2 * Math.tan((camera.fov * Math.PI) / 360) * camera.position.z;
                const pixelRatio = window.innerHeight / visibleHeightAtZ0;
                const modelScale = globalGroup ? globalGroup.scale.x : 1.5;
                const laptopPixelWidth = (4.2 * modelScale) * pixelRatio;
                const halfWidth = laptopPixelWidth / 2;
                const targetGap = 80; 

                targetY = rect.top + rect.height / 2;
                
                const contentCenter = rect.left + rect.width / 2;
                if (contentCenter < window.innerWidth / 2) {
                    targetX = rect.right + halfWidth + targetGap;
                } else {
                    targetX = rect.left - halfWidth - targetGap;
                }
            } else {
                const scrollProgressFactor = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight || 1);
                targetX = window.innerWidth / 2;
                targetY = window.innerHeight * 0.32 + (Math.sin(scrollProgressFactor * Math.PI) * 35);
            }
            return { x: targetX, y: targetY };
        }

        function getWeightedTargetCoordinates(isDesktop) {
            let runningWeight = 0, calculatedX = 0, calculatedY = 0;
            const sections = ['hero', 'services', 'features', 'about', 'portal', 'contact'];

            sections.forEach(id => {
                const domNode = document.getElementById(id);
                if (!domNode) return;

                const bounds = domNode.getBoundingClientRect();
                const frameVisibility = Math.max(0, Math.min(bounds.bottom, window.innerHeight) - Math.max(bounds.top, 0));
                
                if (frameVisibility > 0) {
                    const weightVal = frameVisibility / window.innerHeight;
                    const positionCoords = getSectionTargetPos(id, isDesktop);

                    calculatedX += positionCoords.x * weightVal;
                    calculatedY += positionCoords.y * weightVal;
                    runningWeight += weightVal;
                }
            });

            if (runningWeight > 0) {
                return { x: calculatedX / runningWeight, y: calculatedY / runningWeight };
            }
            return { x: window.innerWidth / 2, y: window.innerHeight / 2 };
        }

        function projectPixelsTo3DVectors(screenX, screenY, targetZ = 0) {
            const ndcX = (screenX / window.innerWidth) * 2 - 1;
            const ndcY = -(screenY / window.innerHeight) * 2 + 1;
            const trackingVector = new THREE.Vector3(ndcX, ndcY, 0.5).unproject(camera);
            const directionalRay = trackingVector.sub(camera.position).normalize();
            const intersectionDistance = (targetZ - camera.position.z) / directionalRay.z;
            return camera.position.clone().add(directionalRay.multiplyScalar(intersectionDistance));
        }

        // --- 8. RUNTIME CORE SYSTEM FRAME LOOP ---
        const systemClock = new THREE.Clock();
        let frameProcessingActive = true;

        document.addEventListener('visibilitychange', () => {
            frameProcessingActive = document.visibilityState === 'visible';
        });

        function executeMainFrameUpdate() {
            if (!frameProcessingActive) {
                requestAnimationFrame(executeMainFrameUpdate);
                return;
            }

            const frameDeltaTime = systemClock.getElapsedTime();
            
            // Kinetic levitation loop dynamics
            mouseGroup.position.y = Math.sin(frameDeltaTime * 1.3) * 0.045;
            dynamicHoloParticles.rotation.y = frameDeltaTime * 0.01;
            
            if (holoRing) holoRing.rotation.z = -frameDeltaTime * 0.12;

            const desktopStateFlag = window.innerWidth >= 1024;
            const calculatedTarget = getWeightedTargetCoordinates(desktopStateFlag);
            const currentPlaneZ = gsapGroup.position.z;
            const spatialWorldVector = projectPixelsTo3DVectors(calculatedTarget.x, calculatedTarget.y, currentPlaneZ);
            
            if (globalGroup) {
                globalGroup.updateMatrixWorld();
                const localizedTargetCoordinates = globalGroup.worldToLocal(spatialWorldVector.clone());
                const dampeningFactor = desktopStateFlag ? 0.075 : 0.045;
                
                gsapGroup.position.x += (localizedTargetCoordinates.x - gsapGroup.position.x) * dampeningFactor;
                gsapGroup.position.y += (localizedTargetCoordinates.y - gsapGroup.position.y) * dampeningFactor;
            }

            updateScreenCanvas();
            renderer.render(scene, camera);
            requestAnimationFrame(executeMainFrameUpdate);
        }
        requestAnimationFrame(executeMainFrameUpdate);

        // --- 9. VIEWPORT SCALE & DENSITY RESOLUTION MOTOR ---
        function handleSystemViewportResize() {
            const screenW = window.innerWidth;
            const screenH = window.innerHeight;

            camera.aspect = screenW / screenH;
            camera.updateProjectionMatrix();
            renderer.setSize(screenW, screenH);

            const checkMobileView = screenW < 1024;
            renderer.setPixelRatio(checkMobileView ? 1 : Math.min(window.devicePixelRatio, 2));

            let computedScaleRatio = 1;
            if (screenW < 768) {
                computedScaleRatio = 0.48; 
            } else if (screenW < 1024) {
                computedScaleRatio = 0.78; 
            }
            globalGroup.scale.set(computedScaleRatio, computedScaleRatio, computedScaleRatio);
        }
        window.addEventListener('resize', handleSystemViewportResize);
        handleSystemViewportResize();

        // Release UI layer block matrix once scripts synchronize
        window.addEventListener('load', () => {
            const loaderNode = document.getElementById('preloader');
            setTimeout(() => {
                loaderNode.classList.add('opacity-0', 'pointer-events-none');
            }, 500);
        });
