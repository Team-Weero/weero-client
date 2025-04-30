import React from "react";

const TailwindTestPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-300 to-purple-400 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-transform duration-300">
        <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 mb-8 animate-pulse">
          김소희 바보 테스트 페이지
        </h1>
        
        <div className="mb-8 text-center">
          <p className="text-gray-700 text-xl mb-4">
            김소희는 바보입니다. 하지만 우리 모두는 가끔 바보가 됩니다!
          </p>
          <p className="text-gray-700 text-lg italic">
            이 페이지는 Tailwind CSS 테스트를 위한 재미있는 예시입니다.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-pink-100 p-6 rounded-xl shadow-md transform hover:rotate-2 transition-transform duration-300">
            <h2 className="text-2xl font-bold text-pink-600 mb-3">바보 특징 1</h2>
            <p className="text-gray-600">김소희는 침대에서 일어날 때 항상 발을 헛디뎌요.</p>
          </div>
          
          <div className="bg-purple-100 p-6 rounded-xl shadow-md transform hover:-rotate-2 transition-transform duration-300">
            <h2 className="text-2xl font-bold text-purple-600 mb-3">바보 특징 2</h2>
            <p className="text-gray-600">김소희는 매일 아침 양말을 짝이 안 맞게 신어요.</p>
          </div>
          
          <div className="bg-blue-100 p-6 rounded-xl shadow-md transform hover:rotate-2 transition-transform duration-300">
            <h2 className="text-2xl font-bold text-blue-600 mb-3">바보 특징 3</h2>
            <p className="text-gray-600">김소희는 코딩할 때 세미콜론을 자주 빼먹어요.</p>
          </div>
        </div>
        
        <div className="flex justify-center mb-8">
          <img 
            src="/api/placeholder/300/300"
            alt="바보 아이콘" 
            className="w-32 h-32 rounded-full border-4 border-pink-400 shadow-lg animate-bounce"
          />
        </div>
        
        <div className="bg-gradient-to-r from-pink-200 to-purple-200 p-6 rounded-xl mb-8">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-4">
            바보 점수표
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-center">
              <thead>
                <tr className="bg-white bg-opacity-50">
                  <th className="py-2 px-4 border-b-2 border-pink-300">항목</th>
                  <th className="py-2 px-4 border-b-2 border-pink-300">점수</th>
                  <th className="py-2 px-4 border-b-2 border-pink-300">등급</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-white hover:bg-opacity-30 transition-colors duration-200">
                  <td className="py-2 px-4 border-b border-pink-200">머리 어질어질</td>
                  <td className="py-2 px-4 border-b border-pink-200">95/100</td>
                  <td className="py-2 px-4 border-b border-pink-200">특A급</td>
                </tr>
                <tr className="hover:bg-white hover:bg-opacity-30 transition-colors duration-200">
                  <td className="py-2 px-4 border-b border-pink-200">멍때리기</td>
                  <td className="py-2 px-4 border-b border-pink-200">87/100</td>
                  <td className="py-2 px-4 border-b border-pink-200">A급</td>
                </tr>
                <tr className="hover:bg-white hover:bg-opacity-30 transition-colors duration-200">
                  <td className="py-2 px-4 border-b border-pink-200">실수하기</td>
                  <td className="py-2 px-4 border-b border-pink-200">92/100</td>
                  <td className="py-2 px-4 border-b border-pink-200">특A급</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="text-center">
          <button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300">
            김소희 놀리러 가기
          </button>
        </div>
      </div>
      
      <footer className="mt-8 text-center text-white text-sm opacity-70">
        © 2025 바보 테스트 페이지 - Tailwind CSS 연습용
      </footer>
    </div>
  );
};

export default TailwindTestPage;