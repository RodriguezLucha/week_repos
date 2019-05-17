class PostsController < ApplicationController
  before_action :require_login
  
  def new
    @post = Post.new
  end

  def create
    @post = Post.new(post_params)
    @post.author_id = current_user.id
    @post.sub_posts = params[:sub_ids][1]
    if @post.save 
      redirect_to post_url(@post)
    else 
      flash.now[:errors] = @post.errors.full_messages
      render :new
    end
    
  end
  
  def edit
    @post = Post.find(params[:id])
  end
  
  def show
    @post = Post.find(params[:id])
  end
  
  def update
    @post = current_user.posts.find(params[:id])
    if @post.update_attributes(post_params)
      redirect_to post_url(@post)
    else 
      flash.now[:errors] = @post.errors.full_messages
      render :edit
    end
  end
  
  def destroy
    @post = Post.find(params[:id])
    @post.destroy!
    redirect_to sub_url(@post.sub_id)
  end

  def post_params
    params.require(:post).permit(:title, :url, :content, :author_id, sub_ids: [])
  end
end
