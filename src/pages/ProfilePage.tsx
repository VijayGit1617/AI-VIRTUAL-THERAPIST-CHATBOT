import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Mail, LogOut, Edit2, Save } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';

const ProfilePage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [displayName, setDisplayName] = useState(user?.displayName || 'Anonymous User');

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const handleSaveProfile = () => {
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary-dark rounded-lg blur opacity-25"></div>
          <div className="relative bg-dark-lighter rounded-lg shadow-xl overflow-hidden">
            {/* Cover Photo */}
            <div className="h-48 bg-gradient-to-r from-primary/20 to-primary-dark/20"></div>

            {/* Profile Content */}
            <div className="relative px-6 pb-6">
              {/* Profile Picture */}
              <div className="absolute -top-16 left-6">
                <div className="relative group">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-r from-primary to-primary-dark p-1">
                    <div className="w-full h-full rounded-full bg-dark-lighter flex items-center justify-center">
                      <User className="h-16 w-16 text-primary" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Profile Info */}
              <div className="pt-20">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex-1">
                    {isEditing ? (
                      <input
                        type="text"
                        value={displayName}
                        onChange={(e) => setDisplayName(e.target.value)}
                        className="bg-dark-light text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                      />
                    ) : (
                      <h1 className="text-3xl font-bold text-white">{displayName}</h1>
                    )}
                    <div className="flex items-center mt-2 text-gray-300">
                      <Mail className="h-4 w-4 mr-2" />
                      <span>{user?.email}</span>
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    {isEditing ? (
                      <button
                        onClick={handleSaveProfile}
                        className="btn-primary flex items-center space-x-2"
                      >
                        <Save className="h-5 w-5" />
                        <span>Save</span>
                      </button>
                    ) : (
                      <button
                        onClick={() => setIsEditing(true)}
                        className="btn-primary flex items-center space-x-2"
                      >
                        <Edit2 className="h-5 w-5" />
                        <span>Edit Profile</span>
                      </button>
                    )}
                    <button
                      onClick={handleLogout}
                      className="flex items-center space-x-2 px-4 py-2 bg-red-500/10 text-red-500 rounded-lg hover:bg-red-500/20 transition-colors"
                    >
                      <LogOut className="h-5 w-5" />
                      <span>Logout</span>
                    </button>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 mb-8">
                  <div className="bg-dark-light p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold gradient-text">12</div>
                    <div className="text-gray-300">Sessions</div>
                  </div>
                  <div className="bg-dark-light p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold gradient-text">5h</div>
                    <div className="text-gray-300">Total Time</div>
                  </div>
                  <div className="bg-dark-light p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold gradient-text">8</div>
                    <div className="text-gray-300">Goals Set</div>
                  </div>
                </div>

                {/* Recent Activity */}
                <div>
                  <h2 className="text-xl font-semibold text-white mb-4">Recent Activity</h2>
                  <div className="space-y-4">
                    {[1, 2, 3].map((_, index) => (
                      <div key={index} className="bg-dark-light p-4 rounded-lg">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-white font-medium">Therapy Session #{3 - index}</h3>
                            <p className="text-gray-400 text-sm">Discussed anxiety management techniques</p>
                          </div>
                          <span className="text-gray-400 text-sm">
                            {index === 0 ? 'Today' : index === 1 ? 'Yesterday' : '3 days ago'}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;