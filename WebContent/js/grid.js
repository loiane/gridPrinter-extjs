Ext.onReady(function(){
	
	//se n�o declarar, tenta obter do servidor do site do ExtJS - secure server
	Ext.BLANK_IMAGE_URL = '/gridPrinter-extjs/js/ext-3.0.0/resources/css/resources/images/default/s.gif';

	//array contendo os dados que ser�o exibidos no grid
    var myData = [
        ['Maria','11-12345678','maria@provedor.com','01/02/1984','Rua Agostinho, n� 265'], 
		['Pedro','12-55698745','pedro@provedor.com','12/04/1983','Rua Dr. Abelardo de Barros, n� 686'], 
		['Jo�o','21-78542359','joao@provedor.com','23/05/1986','Rua Eng. Adel, n� 548'],
		['Tiago','27-25854567','tiago@provedor.com','07/01/1982','Rua Aguiar, n� 847'],
		['Carla','33-31595187','carla@provedor.com','30/10/1984','Rua Belvedere, n� 246'], 
		['Estela','21-98652938','estela@provedor.com','29/06/1985','Rua Basil�ia, n� 82'], 
		['Lucas','71-87241548','lucas@provedor.com','25/11/1984','Rua Aguiar, n� 54'], 
		['Mariana','85-33984526','mariana@provedor.com','02/12/1983','Rua Dr. Abelardo de Barros, n� 262'] 
    ];

    //data store que l� os dados e possui sua descri��o - fields
    var store = new Ext.data.SimpleStore({
        fields: [
           'nome',
           'telefone',
           'email',
           {name: 'aniversario', type: 'date', dateFormat: 'd/m/Y'},
           'endereco'
        ]
    });

    //l� os dados
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
            {header: "ENDERE�O", width: 200, sortable: true, dataIndex: 'endereco'},	
        ],
        sm:sm,
        title: 'Impress�o Grid Extjs',
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