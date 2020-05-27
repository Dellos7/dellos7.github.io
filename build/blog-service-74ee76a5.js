const postsDataFile = '/posts.json';
class BlogService {
    static readData() {
        return new Promise((resolve, reject) => {
            if (!this.config) {
                fetch(postsDataFile)
                    .then(response => response.json())
                    .then(data => {
                    if (data) {
                        BlogService.posts = data.posts;
                        BlogService.config = {
                            posts_route: data.postsRoute
                        };
                        resolve({ config: BlogService.config, posts: BlogService.posts });
                    }
                    else {
                        reject(`Could not read data from ${postsDataFile} file.`);
                    }
                });
            }
            else {
                resolve({ config: BlogService.config, posts: BlogService.posts });
            }
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

export { BlogService as B };
