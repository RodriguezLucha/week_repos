class Api::PokemonController < ApplicationController

    def create
        @pokemon = Pokemon.new(pokemon_params)
        if @pokemon.save
            redirect_to api_pokemon_url(@pokemon)
        else
            flash[:errors] = @pokemon.errors.full_messages
            redirect_to api_pokemon_index_url
        end
    end

    def index
        @pokemon = Pokemon.all
    end

    def show
        @pokemon = Pokemon.find(params[:id])
    end

    private
    def pokemon_params
        params.require(:pokemon).permit(:name, :attack, :defense, :poke_type, :image_url, :moves => [])
    end
end
