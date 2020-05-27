const postsDataFile = '/posts.json';
class BlogService {
    static readPostsFile() {
        return new Promise((resolve, reject) => {
            fetch(postsDataFile)
                .then(response => response.json())
                .then(data => {
                if (data && data.posts) {
                    // Convertimos la fecha de string en una fecha de js
                    data.posts = data.posts.map((post) => {
                        post.metadata.date = new Date(post.metadata.date);
                        return post;
                    });
                    // Ordenamos los posts de forma descendente (más recientes primero)
                    data.posts.sort((p1, p2) => {
                        return p2.metadata.date - p1.metadata.date;
                    });
                    BlogService.posts = data.posts;
                    BlogService.config = {
                        posts_route: data.postsRoute
                    };
                }
                resolve({ config: BlogService.config, posts: BlogService.posts });
            });
        });
    }
    static readPosts(idxStart = 0, idxEnd) {
        return new Promise(async (resolve, reject) => {
            let posts, slicedPosts;
            if (!BlogService.posts || BlogService.posts.length == 0) {
                ({ posts } = await this.readPostsFile());
            }
            else {
                posts = BlogService.posts;
            }
            slicedPosts = posts.slice(idxStart, idxEnd ? idxEnd : posts.length);
            resolve(slicedPosts);
        });
    }
    static goToPost(routerHistory, post) {
        routerHistory.push(`/${BlogService.config.posts_route}/` + post.unique_link, post.metadata);
    }
    static getMetadataForPost(uniqueLink) {
        return this.getPropertyForPost(uniqueLink, 'metadata');
    }
    static getFileForPost(uniqueLink) {
        return this.getPropertyForPost(uniqueLink, 'file');
    }
    static getPropertyForPost(uniqueLink, property) {
        let post = this.getPost(uniqueLink);
        if (post) {
            return post[property];
        }
        return null;
    }
    static getPost(uniqueLink) {
        const posts = BlogService.posts;
        let filteredPosts = posts.filter((post) => {
            return post.unique_link === uniqueLink;
        });
        if (filteredPosts && filteredPosts[0]) {
            return filteredPosts[0];
        }
        return null;
    }
}
BlogService.config = { posts_route: 'blog' };
BlogService.posts = [];

export { BlogService as B };
