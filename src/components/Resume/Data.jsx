const Data = [
  {
    id: 1,
    category: 'education',
    icon: 'icon-graduation',
    year: 'September 2022 - May 2026',
    title: 'Brown University',
    desc: (
      <>
        Computer Science Sc.B <br />
        <br />
        Related Courses:
        <ul className="ul__bullet">
          <li className="li__bullet">Data Structures and Algorithms</li>
          <li className="li__bullet">Software Engineering</li>
          <li className="li__bullet">Computer Systems</li>
          <li className="li__bullet">Artificial Intelligence</li>
          <li className="li__bullet">Computer Graphics</li>
          <li className="li__bullet">Deep Learning</li>
          <li className="li__bullet">Computer Vision</li>
          <li className="li__bullet">Linear Algebra</li>
        </ul>
      </>
    ),
  },
  {
    id: 4,
    category: 'experience',
    icon: 'icon-briefcase',
    year: 'May 2024 - December 2024',
    title: 'Lockheed Martin',
    desc: (
      <>
        Software Engineer Intern <br />
        <br />
        <ul className="ul__bullet">
          <li className="li__bullet">
            Developed a recording control application in Java for real-time SDI
            frame logging using Blackmagic hardware and GStreamer. Implemented
            UDP streaming to receive SDI inputs from UUV and display/record
            video streams. Designed for multi-instance use to provide
            redundancy.
          </li>
          <li className="li__bullet">
            Implemented efficient data transfer between applications using
            Protocol Buffers for message parsing and serialization, improving
            communication speed and reducing data transfer errors.
          </li>
          <li className="li__bullet">
            Designed a dynamic and user-friendly GUI using Java Swing to display
            real-time video streams and detailed hardware/software status
            information.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 5,
    category: 'experience',
    icon: 'icon-briefcase',
    year: 'June 2023 - August 2023',
    title: 'NASA, Ames Research Center (ARC)',
    desc: (
      <>
        Software Engineer Intern <br />
        <br />
        <ul className="ul__bullet">
          <li className="li__bullet">
            Conducted viability research on electric aircraft through flight
            simulations in the National Airspace System (NAS) using the
            NAS-Digital-Twin (NDT), a Java simulation tool.
          </li>
          <li className="li__bullet">
            Debugged and unit tested the NDT, boosting output accuracy and code
            coverage. Parsed flight data files to generate realistic inputs
            modeling aircraft for the NDT, facilitating various statistical
            analyses.
          </li>
          <li className="li__bullet">
            Analyzed NDT data outputs from MySQL database to project fuel burn,
            emissions, and turnaround times of aircraft in the NAS. Provided
            valuable operational and environmental insights.
          </li>
        </ul>
      </>
    ),
  },
]

export default Data
