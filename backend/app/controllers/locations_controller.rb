class LocationsController < ApplicationController
    def index
        @locations = Location.all
        render json: @locations 
    end

    def show
        @location = Location.find(params[:id])
        render json: @location 
    end

    def destroy
        @location = Location.find(params[:id])
        @location.destroy
    end
    
end
