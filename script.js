// 게시글 데이터 배열
const posts = [
    { no: 1, type: '공지', title: '서울 퀵서비스 오픈 안내', date: '2024-08-01' },
    { no: 2, type: '질문', title: '서비스 이용 방법은?', date: '2024-08-10' },
    { no: 3, type: '답변', title: '배송 기간 안내', date: '2024-08-15' }
];

// HTML 테이블에 게시글 추가
function loadPosts() {
    const tableBody = document.querySelector('#postTable tbody');
    posts.forEach(post => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${post.no}</td>
            <td>${post.type}</td>
            <td><a href="#${post.title}">${post.title}</a></td>
            <td>${post.date}</td>
        `;
        tableBody.appendChild(row);
    });
}

// 페이지 로드 시 게시글 로드
window.onload = loadPosts;
