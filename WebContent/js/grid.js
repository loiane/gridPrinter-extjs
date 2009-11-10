Ext.onReady(function(){
	
	//se não declarar, tenta obter do servidor do site do ExtJS - secure server
	Ext.BLANK_IMAGE_URL = '/gridPrinter-extjs/js/ext-3.0.0/resources/css/resources/images/default/s.gif';

	//array contendo os dados que serão exibidos no grid
    var myData = [
        ['Maria','11-12345678','maria@provedor.com','01/02/1984','Rua Agostinho, nº 265'], 
		['Pedro','12-55698745','pedro@provedor.com','12/04/1983','Rua Dr. Abelardo de Barros, nº 686'], 
		['João','21-78542359','joao@provedor.com','23/05/1986','Rua Eng. Adel, nº 548'],
		['Tiago','27-25854567','tiago@provedor.com','07/01/1982','Rua Aguiar, nº 847'],
		['Carla','33-31595187','carla@provedor.com','30/10/1984','Rua Belvedere, nº 246'], 
		['Estela','21-98652938','estela@provedor.com','29/06/1985','Rua Basiléia, nº 82'], 
		['Lucas','71-87241548','lucas@provedor.com','25/11/1984','Rua Aguiar, nº 54'], 
		['Mariana','85-33984526','mariana@provedor.com','02/12/1983','Rua Dr. Abelardo de Barros, nº 262'] 
    ];

    //data store que lê os dados e possui sua descrição - fields
    var store = new Ext.data.SimpleStore({
        fields: [
           'nome',
           'telefone',
           'email',
           {name: 'aniversario', type: 'date', dateFormat: 'd/m/Y'},
           'endereco'
        ]
    });

    //lê os dados
    store.loadData(myData);
    
    //checkboxes
    var sm = new Ext.grid.CheckboxSelectionModel();

    // cria o grid
    var grid = new Ext.grid.GridPanel({
        store: store,
        columns: [
            sm,      
            {header: "NOME", width: 170, sortable: true, dataIndex: 'nome'},
            {header: "TELEFONE", width: 150, sortable: true, dataIndex: 'telefone'},
            {header: "EMAIL", width: 150, sortable: true, dataIndex: 'email'},
            {header: "DATA NASC.", width: 100, sortable: true, dataIndex: 'aniversario',
            	renderer: Ext.util.Format.dateRenderer('d/m/Y')},
            {header: "ENDEREÇO", width: 200, sortable: true, dataIndex: 'endereco'},	
        ],
        sm:sm,
        title: 'Impressão Grid Extjs',
        autoHeight:true,
        width:800,
		renderTo: document.body,
		frame:true,
		tbar : [
		        {
		          text   : 'Imprimir',
		          handler: function() {
		        	Ext.ux.GridPrinter.print(grid);
		          }
		        }
		      ]
    });

    //div do grid
    grid.render('impressao-grid');
});