class FavoritesController < ApplicationController
 
    def index
        @favorites = User.all
        render json: @favorites, include: [:locations] 
    end

    def show
        @favorite = Favorite.find(params[:id])
        render json: @favorite, include: [:locations] 
    end

    def create
        @favorite = Favorite.create(
            user_id: params[:user_id],
            location_id: params[:location_id]
        )
        render json: @favorite 
    end

    def destroy
        @favorite = Favorite.find(params[:id])
        @favorite.destroy
    end
end
