
function fillInnerTable(tableId, obs, modifyFunction = null, deleteFunction = null) {
    var table = document.getElementById(tableId);
    var hasButton = table.getAttribute('hasButton') == '1';
    var thead = table.children[0];
    var tbody = table.children[1];

    tbody.innerHTML = '';
    var headingCells = thead.children[0].children;
    var searchCells = thead.children[0].children;
    
    for (var i = 1; i < searchCells.length; i++) {
        var searchCell = searchCells[i];
        if (searchCell.children.length != 0) {
            searchCell.children[0].value = '';
        }
    }

    for (var i = 0; i < obs.length; i++) {
        var ob = obs[i];
        var row = createElement("tr");
        var td = createElement("td");
        td.innerHTML = (i + 1);
        row.appendChild(td);
        if (hasButton) {
            var e = headingCells.length - 1;
        } else {
            var e = headingCells.length;
        }

        for (j = 1; j < e; j++) {
            var td = createElement("td");
            var headingCell = headingCells[j];
            var type = headingCell.getAttribute('datatype');
            var property = headingCell.getAttribute('property');
            var propertytype = headingCell.getAttribute('propertytype');

            if (propertytype == 'attribute') {
                var get = function (model, path) {
                    var parts = path.split('.');
                    if (parts.length > 1 && typeof model[parts[0]] === 'object') {
                        return get(model[parts[0]], parts.splice(1).join('.'));
                    } else {
                        return model[parts[0]];
                    }
                }
                var data = get(ob, property);
            } else {
                var data = window[property](ob);
            }

            if (type == 'text') {
                if (data == null) {
                    data = '-';
                }
                td.innerHTML = data;
            }
            row.appendChild(td);
        }

        if (hasButton) {
            var td = createElement("td");

            // Inner Table Update Button
            var buttonInnerUpdate = createElement('button');
            buttonInnerUpdate.setAttribute('type', 'button');
            buttonInnerUpdate.classList.add('btn');
            buttonInnerUpdate.classList.add('btn-sm');
            buttonInnerUpdate.classList.add('btn-warning');
            buttonInnerUpdate.classList.add('text-light');
            buttonInnerUpdate.innerHTML = 'Edit';
            buttonInnerUpdate.onclick = function () {
                idx = window.parseInt(this.parentNode.parentNode.firstChild.innerHTML);
                modifyFunction(obs[idx - 1], idx-1);
            };

            // Inner Table Delete Button
            var buttonInnerDelete = createElement('button');
            buttonInnerDelete.setAttribute('type', 'button');
            buttonInnerDelete.classList.add('btn');
            buttonInnerDelete.classList.add('ml-1');
            buttonInnerDelete.classList.add('btn-sm');
            buttonInnerDelete.classList.add('btn-danger');
            buttonInnerDelete.innerHTML = 'Remove';
            buttonInnerDelete.onclick = function () {
                idx = window.parseInt(this.parentNode.parentNode.firstChild.innerHTML);
                deleteFunction(obs[idx - 1], idx-1);
            };

            td.appendChild(buttonInnerUpdate);
            td.appendChild(buttonInnerDelete);
            row.appendChild(td);
        }
        tbody.appendChild(row);
    }
}