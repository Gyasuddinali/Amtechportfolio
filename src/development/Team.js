import React from 'react';

const teamMembers = [
  {
    name: 'Gyasuddin Ali',
    role: 'Team Head',
    education: 'MCA,BCA',
    experience: '1+ years',
    image: 'https://via.placeholder.com/150',
    description: 'Leads the development team, ensures project delivery, and guides technical direction.',
  },
  {
    name: 'Gyasuddin Ali',
    role: 'Full Stack Developer',
    education: 'MCA, BCA',
    experience: '1+ years',
    image: 'https://scontent.fpat2-7.fna.fbcdn.net/v/t39.30808-6/482221674_4050676265259128_3170389847700143815_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=6RYdfuiP3IwQ7kNvwG1aUXa&_nc_oc=AdlDJcPlVF5wcV54jhff7Vl2z0_WmzpQCzbHJmIQOAlKx_eBZlwh5BIUz9pTg0jc3F1UofHo9L7EaSNfBV7WvCda&_nc_zt=23&_nc_ht=scontent.fpat2-7.fna&_nc_gid=6mJ_Csyxj_wj4G0aeMkZjw&oh=00_AfSlDoP8AzbpIzUDP2HDRjKTRwrVF3EPhbUDGlVEpIfbXw&oe=687298AB',
    description: 'Builds and maintains complete web applications, from interface to database.',
  },
  {
    name: 'Afroz Ali',
    role: 'SEO Specialist',
    education: 'BCA',
    experience: '5+ years',
    image: 'https://scontent.fpat2-5.fna.fbcdn.net/v/t39.30808-6/486165086_3611333029166027_1915272355805201316_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=tk5UXtQ7AGcQ7kNvwFKb9e6&_nc_oc=AdlotPO2Fk5naAgBF5nYsIAjS-XOHyWf5k10iE6aQ5m2GCIejfVDMZDe89KiWCB5VkCL_PaRJyRkAJl3zp8D8M-j&_nc_zt=23&_nc_ht=scontent.fpat2-5.fna&_nc_gid=RO8NXsGWVaw1oRvrVprqig&oh=00_AfSe_U5ZTGSi2E4Q_hpAdDx-6cidLT6jz5E1Mm0Pn5v01w&oe=6872A83A',
    description: 'Boosts online presence through keyword and content strategy.',
  },
  {
    name: 'Kamran Irshad',
    role: 'Java Developer',
    education: 'BCA',
    experience: '2+ years',
    image: 'https://scontent.fpat2-4.fna.fbcdn.net/v/t39.30808-6/505373717_9798636450240864_2583932153695109361_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=x3eP_7EHEH8Q7kNvwF28YTo&_nc_oc=AdlGC2zsorvY5uGefTw42ZsPph2YLG9bUL6YNvIWzE146Ear71QKIbXo_CxmuyciMuYHTWR4qq9O-dS6CkUHnYRH&_nc_zt=23&_nc_ht=scontent.fpat2-4.fna&_nc_gid=qZBMAuUUEOHd-izLjrdB2w&oh=00_AfTLa1OZVOeokMp3vf-1cAvtVCrIidvnUz41vmWW0W6sdQ&oe=6872B6AD',
    description: 'Develops enterprise-level applications and backend services',
  },
];

const Team = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-5"  style={{color:'#d4af37'}}>Meet Our Team</h2>
      <div className="row">
        {teamMembers.map((member, index) => (
          <div className="col-md-6 col-lg-3 mb-4" key={index}>
            <div className="card h-100 text-center shadow-sm border-0">
              <img
                src={member.image}
                className="card-img-top rounded-circle mx-auto mt-3"
                alt={member.name}
                style={{ width: '120px', height: '120px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title ">{member.name}</h5>
                <p className="card-subtitle mb-1 text-dark">{member.role}</p>
                <p className="text-secondary small mb-1 text-dark"><i>{member.education}</i></p>
                <p className="text-secondary small mb-2 text-dark">Experience: {member.experience}</p>
                <p className="card-text small text-dark">{member.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
