import { RouterHistory } from '@stencil/router';
const postsDataFile = '/posts.json';
import { Config, Post } from '../model/interfaces';

export class BlogService {

    public static config: Config = { posts_route: 'blog' };
    public static posts: Post[] = [];

    private static readPostsFile(): Promise<{ config: Config, posts: Post[] }>{
        return new Promise<{ config: Config, posts: Post[] }>((resolve, reject) => {
            fetch(postsDataFile)
                .then(response => response.json())
                .then(data => {
                    if (data && data.posts) {
                        // Convertimos la fecha de string en una fecha de js
                        data.posts = data.posts.map( (post: Post) => {
                            post.metadata.date = new Date(post.metadata.date);
                            return post;
                        });
                        // Ordenamos los posts de forma descendente (más recientes primero)
                        data.posts.sort( (p1: Post, p2: Post) => {
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

    public static readPosts( idxStart = 0, idxEnd? ): Promise<Post[]> {
        return new Promise<Post[]>( async(resolve, reject) => {
            let posts, slicedPosts;
            if( !BlogService.posts || BlogService.posts.length == 0 ){
                ({ posts } = await this.readPostsFile());
            } else{
                posts = BlogService.posts;
            }
            slicedPosts = posts.slice( idxStart, idxEnd ? idxEnd : posts.length );
            resolve(slicedPosts);
        });
    }

    public static goToPost(routerHistory: RouterHistory, post: Post) {
        routerHistory.push(`/${BlogService.config.posts_route}/` + post.unique_link, post.metadata);
    }

    public static getMetadataForPost( uniqueLink: string ): any {
        return this.getPropertyForPost( uniqueLink, 'metadata' );
    }

    public static getFileForPost( uniqueLink: string ): string {
        return this.getPropertyForPost( uniqueLink, 'file' );
    }

    public static getPropertyForPost( uniqueLink: string, property: string ): any {
        let post = this.getPost( uniqueLink );
        if( post ) {
            return post[property];
        }
        return null;
    }

    public static getPost( uniqueLink: string ): Post {
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