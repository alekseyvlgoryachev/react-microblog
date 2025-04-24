import React, {Component} from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";

// import "../../../src/components/app/app.css";
import styled from "styled-components";

const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
`;

class App extends Component {

    state = {
        data: [
            {label: "Going to learn React", important: true, like: false, id: 1},
            {label: "That is so good", important: false, like: false, id: 2},
            {label: "I need a break...", important: false, like: false, id: 3}
        ],
        term: "",
        filter: "all"
    };

    // Отдельная функция для вычисления нового id
    findNextId = (items) => {
        // Получаем все существующие id, сортируем их
        const existingIds = items.map(item => item.id).sort((a, b) => a - b);
        
        // Ищем первую "дыру" в последовательности
        let newId = 1; // начинаем с 1, если массив пустой
        
        for (let i = 0; i < existingIds.length; i++) {
            if (existingIds[i] !== i + 1) {
                // Нашли дыру
                newId = i + 1;
                break;
            }
            
            // Если дыр нет, берем максимальный + 1
            if (i === existingIds.length - 1) {
                newId = existingIds[i] + 1;
            }
        }

        return newId;
    }

    toggleState = (nPostId, sState) => {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === nPostId);

            const old = data[index];
            const newItem = {...old, [sState]: !old[sState]};

            const before = data.slice(0, index);
            const after = data.slice(index + 1);

            const newArr = [...before, newItem, ...after];

            return {
                data: newArr
            }
        });
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const before = data.slice(0, index);
            const after = data.slice(index + 1);

            const newArr = [...before, ...after];

            return {
                data: newArr
            }
        });
    }

    addItem = (body) => {
        const newId = this.findNextId(this.state.data);

        const newItem = {
            label: body,
            important: false,
            id: newId
        };
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    onToggleImportant = (id) => {
        this.toggleState(id, "important");
    }

    onToggleLiked = (id) => {
        this.toggleState(id, "like");
    }

    searchPost = (items, sSearchRequest) => {
        if(sSearchRequest.length === 0) {
            return items;
        }

        return items.filter( (item) => {
            // Приведение к нижнему регистру для регистронезависимого поиска
            const sLowerString = item.label.toLowerCase();
            const sLowerRequest = sSearchRequest.toLowerCase();
    
            // Разбиваем поисковый запрос на слова
            const aSearchWords = sLowerRequest.split(/\s+/).filter(word => word.length > 0);
            
            // Если запрос пустой, возвращаем true
            if (aSearchWords.length === 0) {
                return true;
            }
            
            // Проверяем каждое слово из запроса
            for (let iWordCounter = 0; iWordCounter < aSearchWords.length; iWordCounter++) {
                const sCurrentWord = aSearchWords[iWordCounter];
                
                // Проверяем, содержится ли текущее слово в строке
                if (!sLowerString.includes(sCurrentWord)) {
                    return false;
                }
            }
            
            // Если все слова найдены, возвращаем true
            return true;
        } );
    }

    filterPost = (items, filter) => {
        if(filter === "all" || !filter) {
            return items;
        }
        else {
            return items.filter(item => item[filter]);
        }
    }

    setSearchRequest = (term) => {
        this.setState({ term });
    }

    setFilter = (filter) => {
        this.setState({ filter });
    }

    render() {
        const { data, term, filter } = this.state;

        const liked = data.filter(item => item.like).length;
        const allPosts = data.length;

        const visiblePosts = this.filterPost(this.searchPost(data, term), filter);

        return (
            <AppBlock>
                <AppHeader
                    liked={liked}
                    allPosts={allPosts} />
                <div className="search-panel d-flex">
                    <SearchPanel onInput={ this.setSearchRequest } />
                    <PostStatusFilter
                        filter={filter}
                        onActivateFilter={ this.setFilter } />
                </div>
                <PostList
                    posts={visiblePosts}
                    onDelete={ this.deleteItem }
                    onToggleImportant={ this.onToggleImportant }
                    onToggleLiked={ this.onToggleLiked } />
                <PostAddForm
                    onAdd={ this.addItem } />
            </AppBlock>
        )
    }
}

export default App;