
// page two

// pae six

  const students12 = [
            { name: "ANKITA KIRAR", year: "2022-2023", percentage: 90.6, image: "/img/mirchi.webp" },
            { name: "NIKITA PATEL", year: "2022-2023", percentage: 90.2, image: "/img/nikita-didi.webp" },
            { name: "ADITYA PATEL", year: "2022-2023", percentage: 87.6, image: "/img/aadi.jpg" },
            { name: "ANISHI SAHU", year: "2022-2023", percentage: 87, image: "/img/anishi-sahu.jpg" },
            { name: "AKRITI", year: "2022-2023", percentage: 84.6, image: "/img/my-jaan.jpg" },
            { name: "DEEPALI PATEL", year: "2022-2023", percentage: 85.6, image: "/img/dpi.jpg" },
            { name: "KHUSHBO NAMDEV", year: "2022-2023", percentage: 83.6, image: "/img/didi.jpg" },
            { name: "ANJALI PATEL", year: "2022-2023", percentage: 82, image: "/img/angali.jpg" },
            { name: "DISHA TIWARI", year: "2022-2023", percentage: 82.2, image: "/img/kutti.jpg" },
            { name: "KHUSHI BUNKAR", year: "2022-2023", percentage: 82, image: "/img/khusbhi-kori.jpg" },
            { name: "RAHUL KORI", year: "2022-2023", percentage: 87, image: "/img/rahul-kori.jpg" },
            { name: "ABHIJEET PATEL", year: "2023-2028", percentage: 96.4, image: "/img/abhijeet.jpg" },
            { name: "PRANAV PATEL", year: "2023-2024", percentage: 94.4, image: "/img/pranav.jpg" }
        ];

        const students10 = [
            // { name: "ROHIT PATEL", year: "2023-2024", percentage: 95.8, image: "/img/rohit-10-24.webp" },
            // { name: "SHEETAL PATEL", year: "2023-2024", percentage: 97, image: "/img/seetal-patel.jpg" }
        ];
  // Function to populate the grid with student data
    function populateStudents(gridId, students) {
        const grid = document.getElementById(gridId);
        grid.innerHTML = ''; // Clear existing content
        students.forEach(student => {
            const studentBox = document.createElement('div');
            studentBox.className = 'student-box';
            studentBox.innerHTML = `
                <img src="${student.image}" alt="${student.name}" loading="lazy">
                <p>${student.percentage}%</p>
                <h4>Name: ${student.name}</h4>
                <h4>Year: ${student.year}</h4>
            `;
            grid.appendChild(studentBox);
        });
    }

    // Manual Scroller Logic
    document.addEventListener("DOMContentLoaded", function () {
        populateStudents('student-grid-12th', students12);
        
        const scroller = document.getElementById('student-grid-12th');
        const scrollLeftBtn = document.getElementById('scrollLeftBtn');
        const scrollRightBtn = document.getElementById('scrollRightBtn');

        function handleScroll(direction) {
            const card = scroller.querySelector('.student-box');
            if (!card) return;
            
            const cardWidth = card.offsetWidth;
            const cardStyle = window.getComputedStyle(card);
            const cardMargin = parseFloat(cardStyle.marginLeft) + parseFloat(cardStyle.marginRight);
            const scrollDistance = cardWidth + cardMargin;
            
            scroller.scrollBy({
                left: direction * scrollDistance,
                behavior: 'smooth'
            });
        }
        
        scrollRightBtn.addEventListener('click', () => handleScroll(1));
        scrollLeftBtn.addEventListener('click', () => handleScroll(-1));
    });
            // Scroll-based reveal for topper boxes
            const topperBoxes = document.querySelectorAll('.topper-box');
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.3 // Trigger when 30% of the box is visible
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.classList.add('visible');
                        }, index * 500); // Delay each box by 500ms for smoother transition
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            topperBoxes.forEach(box => observer.observe(box));

            // Show the first topper box immediately
            topperBoxes[0].classList.add('visible');
        });



        // gallery
   document.addEventListener('DOMContentLoaded', function () {
            const lightbox = document.getElementById('lightbox');
            const lightboxImg = document.getElementById('lightbox-img');
            const lightboxCaption = document.getElementById('lightbox-caption');
            const closeBtn = document.querySelector('.close');

            // Function to open lightbox
            function openLightbox(imgSrc, caption) {
                lightboxImg.src = imgSrc;
                lightboxCaption.textContent = caption;
                lightbox.style.display = 'flex';
            }

            // Function to close lightbox
            function closeLightbox() {
                lightbox.style.display = 'none';
                lightboxImg.src = '';
                lightboxCaption.textContent = '';
            }

            // Add click event listeners to Instagram images
            document.querySelectorAll('.image-box').forEach(box => {
                const caption = box.querySelector('.caption').textContent;
                box.addEventListener('click', function (e) {
                    const img = box.querySelector('img');
                    if (img) {
                        openLightbox(img.src, caption);
                    }
                });
            });

            // Close lightbox on click
            closeBtn.addEventListener('click', closeLightbox);

            // Close lightbox when clicking outside the image
            lightbox.addEventListener('click', function (e) {
                if (e.target === lightbox) {
                    closeLightbox();
                }
            });

            // Lazy load Instagram embeds
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const blockquote = entry.target.querySelector('blockquote');
                        if (blockquote && !blockquote.classList.contains('loaded')) {
                            const script = document.createElement('script');
                            script.src = '//www.instagram.com/embed.js';
                            script.async = true;
                            entry.target.appendChild(script);
                            blockquote.classList.add('loaded');
                        }
                        observer.unobserve(entry.target);
                    }
                });
            }, { rootMargin: '0px 0px 200px 0px' });

            document.querySelectorAll('.image-box').forEach(box => {
                observer.observe(box);
            });

        });
