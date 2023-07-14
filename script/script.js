/*Global Variables*/
var completedTasks = 0, totalTasks=0;

function toggleTheme() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

function createResume() {
  /* Personal */
  var name = document.getElementById("name").value;
  var dob = document.getElementById("dob").value;
  var contact = document.getElementById("contact").value;
  var email = document.getElementById("email").value;
  var github = document.getElementById("github").value;
  var linkedin = document.getElementById("linkedin").value;
  

  /* Skills */
  var skills = document.getElementById("skills").value;
  /* Education */
  var education = document.getElementById("education").value;
  var percentage = document.getElementById("percentage").value;
  var year = document.getElementById("year").value;
  /* Work Experience */
  var title = document.getElementById("title").value;
  var role = document.getElementById("role").value;
  /* Project */
  var project_title = document.getElementById("project-title").value;
  var project_description = document.getElementById("project-description").value;

  // Open a new window
  var resumeWindow = window.open();

  // Generate the resume HTML content
  var resumeContent = `
  <html>
  <head>
    <title>Resume - ${name}</title>
    <!-- Add Bootstrap CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="css/resumePage.css">
    <style>
      .heading-border {
        border-top: 1px solid black;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="card">
        <div class="card-body">
          <div class="row justify-content-center">
          <!--Image-->
            <div class="col-md-6">
              <h1>${name}</h1>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <p>Email: ${email}</p>
              <p>Date Of Birth: ${dob}</p>
              <p>Mobile: ${contact}</p>
            </div>
            <div class="col">
              <p>Github: <a href="${github}">${github}</a></p>
              <p>LinkedIn: <a href="${linkedin}">${linkedin}</a></p>
            </div>
          </div>

          <div class="row">
            <div class="col">
              <div class="heading-border"></div>
              <div class="row">
                <div class="col">
                  <h2>EDUCATION</h2>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <ul>
                    <li>${education} (${percentage}%)</li>
                    <li>${year}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col">
            <div class="heading-border"></div>
              <div class="row">
                <div class="col">
                  <h2>EXPERIENCE</h2>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <ul>
                    <li>${title}</li>
                    <ul>
                      <li>Role: ${role}</li>
                    </ul>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col">
            <div class="heading-border"></div>
              <div class="row">
                <div class="col">
                  <h2>Skills</h2>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <ul>
                    <li>${skills}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col">
            <div class="heading-border"></div>
              <div class="row">
                <div class="col">
                  <h2>PROJECTS</h2>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <ul>
                    <li>${project_title}: ${project_description}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    
    <!-- Add Bootstrap JS and any necessary additional JS scripts here -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js"></script>
  </body>
  </html>
  `;

  // Write the resume content to the new window
  resumeWindow.document.open();
  resumeWindow.document.write(resumeContent);
  resumeWindow.document.close();
}

