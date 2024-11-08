export const criarTabela = (dados, columns, properties) => {
    const tabelaHtml = dados && dados.length > 0 
        ? 
        `<table class="w-1/2 mx-auto border-collapse table-auto">
            <thead>
                <tr class="bg-yellow-500 text-white font-bold">
                    ${columns.map(columnName => `<th class="border border-gray-300 p-3 text-center">${columnName}</th>`).join('')}
                </tr>
            </thead>
            <tbody>
                ${dados.map(item => `
                    <tr class="even:bg-gray-50 hover:bg-gray-100">
                        ${properties.map(prop => `<td class="border border-gray-300 p-3 text-center text-sm">${item[prop] || ""}</td>`).join('')}                              
                    </tr>`).join("\n")}
            </tbody>
        </table>`
        : "<p class='text-red-500'>Nenhum dado disponível.</p>";

    return tabelaHtml;
};