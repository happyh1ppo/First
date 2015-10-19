var gOrdList = '[{"id":"0","value":"1710","time":"14:55:13","consist":"Ассорти из европейских сыров...(5)"},{"id":"1","value":"1540","time":"14:59:43","consist":"Грибной суп-пюре...(6)"},{"id":"2","value":"3980","time":"15:05:28","consist":"Ассорти из свежих овощей...(12)"},{"id":"3","value":"920","time":"15:10:33","consist":"Домашний салат с овощами...(5)"},{"id":"4","value":"1690","time":"15:15:03","consist":"Салат из томатов с луком...(6)"},{"id":"5","value":"3500","time":"15:20:26","consist":"Карпаччо...(8)"},{"id":"6","value":"2380","time":"15:25:50","consist":"Пицца «Четыре сыра»...(5)"}]';
var gConsistList = '[{"id":"0","name":"Ассорти из европейских сыров с медом (дор блю, пармезан, бри, шеврот, орехи и мед)","weight":"50/50/50/50","value":"540","amount":"1","totalV":"540"},{"id":"0","name":"Цезарь с теплой курицей и яйцом пашот","weight":"220","value":"270","amount":"1","totalV":"270"},{"id":"0","name":"Мюнхенские колбаски с картофельным  салатом и острой капустой","weight":"200/100/40/60","value":"390","amount":"1","totalV":"390"},{"id":"0","name":"Рис с овощами","weight":"150","value":"110","amount":"1","totalV":"110"},{"id":"0","name":"Грейпфрутовый сок","weight":"200 мл.","value":"200","amount":"2","totalV":"400"},{"id":"1","name":"Нежный грибной суп-пюре","weight":"250","value":"330","amount":"1","totalV":"330"},{"id":"1","name":"Спагетти А-ля Карбонара с беконом и грибами","weight":"200/150","value":"310","amount":"1","totalV":"310"},{"id":"1","name":"Cвиные ребра барбекю с салатом из моркови и  капусты","weight":"300/80/80","value":"415","amount":"1","totalV":"415"},{"id":"1","name":"Штрудель с вишней и шариком мороженого","weight":"150/50/30","value":"200","amount":"1","totalV":"200"},{"id":"1","name":"Компот ягодный","weight":"1 л.","value":"210","amount":"1","totalV":"210"},{"id":"1","name":"Хлебная булочка","weight":"50","value":"75","amount":"1","totalV":"75"},{"id":"2","name":"Ассорти из свежих овощей","weight":"150/150/50","value":"230","amount":"1","totalV":"230"},{"id":"2","name":"Опята соленые","weight":"150/30/20","value":"200","amount":"1","totalV":"200"},{"id":"2","name":"Карпаччо из слабосоленой семги, копченого  угря и балыка масляной рыбы","weight":"80/80/80","value":"690","amount":"1","totalV":"690"},{"id":"2","name":"Картофель отварной с укропом и чесноком","weight":"150","value":"90","amount":"2","totalV":"180"},{"id":"2","name":"Капуста тушеная с беконом","weight":"150","value":"110","amount":"1","totalV":"110"},{"id":"2","name":"Стейк из семги запеченный в пряных травах с овощной сальсой","weight":"150/150","value":"560","amount":"2","totalV":"1120"},{"id":"2","name":"Молодое каре ягненка с овощами гриль  и букетом из свежих трав","weight":"150/100/20","value":"720","amount":"1","totalV":"720"},{"id":"2","name":"Блины с клубничным вареньем","weight":"160","value":"100","amount":"1","totalV":"100"},{"id":"2","name":"Блины с медом и кедровым орехом","weight":"150","value":"130","amount":"1","totalV":"130"},{"id":"2","name":"Блины со сгущенным молоком","weight":"100","value":"100","amount":"1","totalV":"100"},{"id":"2","name":"Рихан (напиток из синего базилика)","weight":"1 л.","value":"200","amount":"1","totalV":"200"},{"id":"2","name":"Морс клюквенный","weight":"1 л.","value":"200","amount":"1","totalV":"200"},{"id":"3","name":"Домашний салат со свежими овощами","weight":"230","value":"160","amount":"1","totalV":"160"},{"id":"3","name":"Картофель жареный с грибами","weight":"150","value":"190","amount":"1","totalV":"190"},{"id":"3","name":"Картофель отварной с укропом и чесноком","weight":"150","value":"90","amount":"1","totalV":"90"},{"id":"3","name":"Сырные шарики с ветчиной","weight":"150","value":"180","amount":"1","totalV":"180"},{"id":"3","name":"Апельсиновый сок","weight":"200 мл.","value":"150","amount":"2","totalV":"300"},{"id":"4","name":"Салат из сочных томатов со сладким луком  и ароматным базиликом","weight":"270","value":"210","amount":"2","totalV":"420"},{"id":"4","name":"Рис с овощами","weight":"150","value":"110","amount":"1","totalV":"110"},{"id":"4","name":"Картофель отварной с укропом и чесноком","weight":"150","value":"90","amount":"1","totalV":"90"},{"id":"4","name":"Палтус на гриле с томатами и маслинами","weight":"180/100","value":"540","amount":"1","totalV":"540"},{"id":"4","name":"Радужная форель на гриле","weight":"230/30","value":"380","amount":"1","totalV":"380"},{"id":"4","name":"Чай зелёный с жасмином","weight":"500 мл.","value":"150","amount":"1","totalV":"150"},{"id":"5","name":"Карпаччо из слабосоленой семги, копченого  угря и балыка масляной рыбы","weight":"80/80/80","value":"690","amount":"1","totalV":"690"},{"id":"5","name":"Салат из морского гребешка с соусом из маракуйи (гребешок, физалис ,яблоко, лист салата, маракуйя)","weight":"210","value":"440","amount":"1","totalV":"440"},{"id":"5","name":"Салат из тигровых креветок с томатами черри","weight":"230","value":"330","amount":"1","totalV":"330"},{"id":"5","name":"Рулька Айсбайн с тушеной капустой  и молодым обжаренным картофелем","weight":"400/100/150/30/30","value":"690","amount":"1","totalV":"690"},{"id":"5","name":"Молодое каре ягненка с овощами гриль  и букетом из свежих трав","weight":"150/100/20","value":"720","amount":"1","totalV":"720"},{"id":"5","name":"Рис с овощами","weight":"150","value":"110","amount":"2","totalV":"220"},{"id":"5","name":"Тирамису","weight":"170","value":"210","amount":"1","totalV":"210"},{"id":"5","name":"Морс клюквенный","weight":"1 л.","value":"200","amount":"1","totalV":"200"},{"id":"6","name":"Пицца «Четыре сыра» (дор блю, пармезан, моцарелла, голандский)","weight":"370","value":"410","amount":"1","totalV":"410"},{"id":"6","name":"Пицца Баварская с салями, ветчиной и грибами","weight":"520","value":"450","amount":"1","totalV":"450"},{"id":"6","name":"Тарт Фламбе (луковый пирог с беконом)","weight":"400","value":"340","amount":"1","totalV":"340"},{"id":"6","name":"Куриные крылышки Буфало","weight":"140/50","value":"220","amount":"1","totalV":"220"},{"id":"6","name":"Кроненбург Блан","weight":"500 мл.","value":"240","amount":"4","totalV":"960"}]';