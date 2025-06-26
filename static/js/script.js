        // Set the election date (September 5, 2027)
        const electionDate = new Date('September 5, 2027 00:00:00 GMT+3').getTime();
        
        // Update countdown every second
        const countdown = setInterval(() => {
            const now = new Date().getTime();
            const distance = electionDate - now;
            
            // Time calculations
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            // Display with leading zeros
            document.getElementById('days').textContent = days.toString().padStart(2, '0');
            document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
            document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
            document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
            
            // If countdown ends
            if (distance < 0) {
                clearInterval(countdown);
                document.querySelector('.countdown-container').innerHTML = `
                    <div class="countdown-box" style="grid-column: 1/-1; padding: 4rem;">
                        <div class="countdown-value" style="font-size: 2.5rem;">
                            The People Have Spoken!
                        </div>
                    </div>
                `;
            }
        }, 1000);

        // === Ultra-Premium 3D Hover Effects ===
        const boxes = document.querySelectorAll('.countdown-box');
        boxes.forEach(box => {
            box.addEventListener('mousemove', (e) => {
                const x = e.clientX - box.getBoundingClientRect().left;
                const y = e.clientY - box.getBoundingClientRect().top;
                
                const centerX = box.offsetWidth / 2;
                const centerY = box.offsetHeight / 2;
                
                const angleX = (y - centerY) / 15;
                const angleY = (centerX - x) / 15;
                
                box.style.transform = `translateY(-15px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
                box.style.boxShadow = `0 40px 80px -20px rgba(212, 175, 55, 0.4)`;
            });
            
            box.addEventListener('mouseleave', () => {
                box.style.transform = 'translateY(-15px) rotateX(10deg)';
                box.style.boxShadow = '0 30px 60px -15px rgba(212, 175, 55, 0.3)';
            });
        });