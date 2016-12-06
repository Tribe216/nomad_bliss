class Api::SessionsController < ApplicationController
  before_filter :require_signed_in!, :only => :destroy

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      sign_in(@user)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

  def destroy
    if signed_in?
      sign_out
    else
      render json: ["No current login"], status: 404
    end
  end
end
