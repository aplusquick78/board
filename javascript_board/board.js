// 게시글 데이터 배열
let posts = [];

// 게시글 목록을 로드하는 함수
function loadPosts() {
    const tableBody = document.querySelector('#postTable tbody');
    tableBody.innerHTML = ''; // 기존 게시글 초기화
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

// 게시글 작성 기능
document.getElementById('postForm').addEventListener('submit', function(event) {
    event.preventDefault(); // 기본 폼 제출 방지

    const type = document.getElementById('type').value;
    const title = document.getElementById('title').value;
    const date = new Date().toISOString().split('T')[0]; // 현재 날짜

    // 새로운 게시글 추가
    const newPost = { 
        no: posts.length + 1, 
        type: type, 
        title: title, 
        date: date 
    };
    posts.push(newPost);

    // 게시글 목록 업데이트
    loadPosts();

    // 폼 초기화
    document.getElementById('postForm').reset();
});

// 페이지 로드 시 게시글 로드
window.onload = loadPosts;
