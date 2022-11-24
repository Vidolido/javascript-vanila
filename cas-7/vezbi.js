async function getPosts () {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  if (!response.ok) {
    console.log('Error ' + response.statusText)
    return
  }
  const data = await response.json()
  generatePosts(data.slice(0, 10))
  removeLoader()
}

async function getComments (postId) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)

  if (!response.ok) {
    console.log('Error ' + response.statusText)
    return
  }
  const data = await response.json()
  generateComments(data)
}

function generateComments(comments) {
  comments.forEach(comment => {
    const p = document.createElement('p')
    const textarea = document.createElement('textarea')

    p.innerText = comment.name 
    textarea.innerText = comment.body 
    const commentsContainer = document.getElementById(`comments-${comment.postId}`)
    commentsContainer.appendChild(p)
    commentsContainer.appendChild(textarea)
  })
}
  
function generatePosts(posts) {
  /// generate HTML
  posts.forEach(post => {
    const div = document.createElement('div')
    const p = document.createElement('p')
    const text = document.createElement('p')
    const button = document.createElement('button')
    const commentsContainer = document.createElement('div')
    commentsContainer.id = `comments-${post.id}`
    // event binding
    button.onclick = () => getComments(post.id)

    p.innerText = post.title
    p.style="font-weight: bold"
    text.innerText = post.body
    text.style="min-width: 400px; min-height: 100px;"
    button.innerText = 'Show Comments'

    div.appendChild(p)
    div.appendChild(text)
    div.appendChild(button)
    div.appendChild(commentsContainer)

    document.body.appendChild(div)
  })
}
  
function removeLoader() {
  document.body.removeChild(document.getElementById('loading'))
}



getPosts()