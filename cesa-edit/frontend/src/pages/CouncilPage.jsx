import React, { useEffect, useState } from "react";
import { collection, getDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import CouncilMemberCard from "../components/CouncilMemberCard";

const CouncilPage = () => {
  const [councilMembers, setCouncilMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [filter, setFilter] = useState("all");

  const memberPaths = [
    // 4th year members
    { year: "cesa 4th year", subcollection: "Saumitra", docId: "Saumitra-1", yearLevel: "4th" },
    { year: "cesa 4th year", subcollection: "Paras", docId: "Paras1", yearLevel: "4th" },
    { year: "cesa 4th year", subcollection: "Vivek", docId: "Vivek1", yearLevel: "4th" },
    { year: "cesa 4th year", subcollection: "Siddhanta", docId: "Siddhanta1", yearLevel: "4th" },
    { year: "cesa 4th year", subcollection: "Anshika", docId: "Anshika1", yearLevel: "4th" },
    { year: "cesa 4th year", subcollection: "Bobby", docId: "Bobby1", yearLevel: "4th" },

    // 3rd year members
    { year: "cesa 3rd year", subcollection: "Yashaswi", docId: "Yashaswi1", yearLevel: "3rd" },
    { year: "cesa 3rd year", subcollection: "Kajal", docId: "Kajal1", yearLevel: "3rd" },
    { year: "cesa 3rd year", subcollection: "Navneet", docId: "Navneet1", yearLevel: "3rd" },
    { year: "cesa 3rd year", subcollection: "Sumit", docId: "Sumit1", yearLevel: "3rd" },
    { year: "cesa 3rd year", subcollection: "Adarsh", docId: "Adarsh1", yearLevel: "3rd" },
    { year: "cesa 3rd year", subcollection: "Siddhi", docId: "Siddhi1", yearLevel: "3rd" },
    { year: "cesa 3rd year", subcollection: "Shreya", docId: "Shreya1", yearLevel: "3rd" },
    { year: "cesa 3rd year", subcollection: "Aditi", docId: "Aditi1", yearLevel: "3rd" },
    { year: "cesa 3rd year", subcollection: "Bhoomi", docId: "Bhoomi1", yearLevel: "3rd" },
    { year: "cesa 3rd year", subcollection: "Devansh", docId: "Devansh1", yearLevel: "3rd" },
    { year: "cesa 3rd year", subcollection: "Siddharth", docId: "Siddharth1", yearLevel: "3rd" },
    { year: "cesa 3rd year", subcollection: "Vibha", docId: "Vibha1", yearLevel: "3rd" },
  ];

  useEffect(() => {
    const fetchCouncilMembers = async () => {
      setLoading(true);
      setError(false);
      try {
        const fetchPromises = memberPaths.map((path) => {
          const docRef = doc(db, "Council Members", path.year, path.subcollection, path.docId);
          console.log("📍Fetching:", docRef.path);
          return getDoc(docRef).then(snap => ({
            ...snap.data(),
            id: snap.id,
            yearLevel: path.yearLevel,
            exists: snap.exists()
          }));
        });

        const snapshots = await Promise.all(fetchPromises);
        const members = snapshots
          .filter((member) => member.exists)
          .map((member) => ({ 
            id: member.id, 
            yearLevel: member.yearLevel,
            ...member 
          }));

        setCouncilMembers(members);
      } catch (error) {
        console.error("❌ Error fetching council members:", error);
        setError(true);
        setCouncilMembers([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCouncilMembers();
  }, []);

  const filteredMembers = councilMembers.filter(member => {
    if (filter === "all") return true;
    return member.yearLevel === filter;
  });

  const fourthYearCount = councilMembers.filter(m => m.yearLevel === "4th").length;
  const thirdYearCount = councilMembers.filter(m => m.yearLevel === "3rd").length;

  if (loading) {
    return (
      <section className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50 pt-24 flex items-center justify-center">
        <div className="text-center">
          <div className="relative">
            <div className="w-24 h-24 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-8"></div>
            <div className="absolute inset-0 w-24 h-24 border-4 border-transparent border-t-cyan-400 rounded-full animate-spin animate-reverse mx-auto" style={{animationDelay: '0.5s'}}></div>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Loading Council Members</h3>
          <p className="text-gray-600">Please wait while we fetch the team information...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50 pt-24 flex items-center justify-center">
        <div className="text-center">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Unable to Load Council Members</h3>
          <p className="text-gray-600 mb-6">There was an error loading the team information.</p>
          <button 
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Try Again
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50 pt-24 pb-16">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-indigo-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-200/15 rounded-full blur-2xl animate-ping"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-800 via-indigo-700 to-cyan-600 bg-clip-text text-transparent mb-4">
              Our Council
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mb-6"></div>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Meet the dedicated team leading CESA towards excellence and innovation
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-100/50 hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-bold text-blue-700 mb-2">{councilMembers.length}</div>
              <div className="text-gray-600 font-medium">Total Members</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-100/50 hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-bold text-indigo-700 mb-2">{fourthYearCount}</div>
              <div className="text-gray-600 font-medium">4th Year Leaders</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-100/50 hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-bold text-cyan-700 mb-2">{thirdYearCount}</div>
              <div className="text-gray-600 font-medium">3rd Year Members</div>
            </div>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setFilter("all")}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                filter === "all"
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg"
                  : "bg-white/80 text-gray-700 hover:bg-white shadow-md border border-gray-200"
              }`}
            >
              All Members ({councilMembers.length})
            </button>
            <button
              onClick={() => setFilter("4th")}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                filter === "4th"
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg"
                  : "bg-white/80 text-gray-700 hover:bg-white shadow-md border border-gray-200"
              }`}
            >
              4th Year ({fourthYearCount})
            </button>
            <button
              onClick={() => setFilter("3rd")}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                filter === "3rd"
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg"
                  : "bg-white/80 text-gray-700 hover:bg-white shadow-md border border-gray-200"
              }`}
            >
              3rd Year ({thirdYearCount})
            </button>
          </div>
        </div>

        {/* Members Grid */}
        <div className="relative">
          {filteredMembers.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-600 mb-2">No Members Found</h3>
              <p className="text-gray-500">No council members match the current filter.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredMembers.map((member, index) => (
                <div
                  key={member.id}
                  className="transform hover:scale-105 transition-all duration-300"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animation: 'fadeInUp 0.6s ease-out both'
                  }}
                >
                  <CouncilMemberCard {...member} />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Year Section Dividers */}
        {filter === "all" && councilMembers.length > 0 && (
          <div className="mt-20">
            {/* 4th Year Section */}
            <div className="mb-16">
              <div className="flex items-center justify-center mb-8">
                <div className="flex-grow h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
                <div className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-full shadow-lg">
                  4th Year Leaders
                </div>
                <div className="flex-grow h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {councilMembers.filter(m => m.yearLevel === "4th").map((member, index) => (
                  <div
                    key={member.id}
                    className="transform hover:scale-105 transition-all duration-300"
                  >
                    <CouncilMemberCard {...member} />
                  </div>
                ))}
              </div>
            </div>

            {/* 3rd Year Section */}
            <div>
              <div className="flex items-center justify-center mb-8">
                <div className="flex-grow h-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent"></div>
                <div className="px-8 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold rounded-full shadow-lg">
                  3rd Year Members
                </div>
                <div className="flex-grow h-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {councilMembers.filter(m => m.yearLevel === "3rd").map((member, index) => (
                  <div
                    key={member.id}
                    className="transform hover:scale-105 transition-all duration-300"
                  >
                    <CouncilMemberCard {...member} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-blue-100/50 max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-800 to-indigo-700 bg-clip-text text-transparent mb-6">
              Want to Join Our Team?
            </h3>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              CESA is always looking for passionate individuals who want to make a difference in the civil engineering community. 
              Join us and be part of something amazing!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Join CESA
                </div>
              </button>
              <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-full border-2 border-blue-600 shadow-lg hover:bg-blue-50 transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Contact Us
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
        
        .animate-reverse {
          animation-direction: reverse;
        }

        .hover\\:shadow-3xl:hover {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </section>
  );
};

export default CouncilPage;