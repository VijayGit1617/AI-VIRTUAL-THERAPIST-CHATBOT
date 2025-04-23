import React from 'react';
import { Github, Linkedin, Instagram, Mail, Phone } from 'lucide-react';

interface TeamMember {
  name: string;
  phone: string;
  email: string;
  instagram: string;
  linkedin: string;
  github: string;
}

const ContactPage = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "VIJAYAGANESH",
      phone: "9025773613",
      email: "vijaytech1617@gmail.com",
      instagram: "i.m_.vijay._",
      linkedin: "https://www.linkedin.com/in/vijayaganesh-bm-50204b291",
      github: "https://github.com/VijayGit1617"
    },
    {
      name: "YASHKUMAR VISHWAKARMA",
      phone: "9079909868",
      email: "yashtech@gmail.com",
      instagram: "_yash_karma",
      linkedin: "https://www.linkedin.com/in/yash-kumar-vishwakarma-86a944267",
      github: "https://github.com/yash-collab-creator"
    },
    {
      name: "YASH KUMAR",
      phone: "7217635855",
      email: "yashkumar7591@gmail.com",
      instagram: "yash_kumar_765",
      linkedin: "https://www.linkedin.com/in/yashkumar001",
      github: "https://github.com/yash-kumar"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Meet Our Team</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get in touch with the brilliant minds behind the AI Virtual Therapist project.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="card group hover:scale-105 transition-transform duration-300">
              <div className="text-center mb-6">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary to-primary-dark flex items-center justify-center">
                  <span className="text-3xl font-bold text-white">
                    {member.name[0]}
                  </span>
                </div>
                <h3 className="text-xl font-semibold gradient-text mb-2">{member.name}</h3>
              </div>

              <div className="space-y-4">
                <a href={`tel:${member.phone}`} className="flex items-center space-x-3 text-gray-300 hover:text-primary transition-colors">
                  <Phone className="h-5 w-5" />
                  <span>{member.phone}</span>
                </a>

                <a href={`mailto:${member.email}`} className="flex items-center space-x-3 text-gray-300 hover:text-primary transition-colors">
                  <Mail className="h-5 w-5" />
                  <span>{member.email}</span>
                </a>

                <a href={`https://instagram.com/${member.instagram}`} target="_blank" rel="noopener noreferrer" 
                   className="flex items-center space-x-3 text-gray-300 hover:text-primary transition-colors">
                  <Instagram className="h-5 w-5" />
                  <span>{member.instagram}</span>
                </a>

                <a href={member.linkedin} target="_blank" rel="noopener noreferrer"
                   className="flex items-center space-x-3 text-gray-300 hover:text-primary transition-colors">
                  <Linkedin className="h-5 w-5" />
                  <span>LinkedIn</span>
                </a>

                <a href={member.github} target="_blank" rel="noopener noreferrer"
                   className="flex items-center space-x-3 text-gray-300 hover:text-primary transition-colors">
                  <Github className="h-5 w-5" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;