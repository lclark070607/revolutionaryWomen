System.register(['@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var Artist, AppComponent, ARTISTS;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Artist = class Artist {
            };
            exports_1("Artist", Artist);
            AppComponent = class AppComponent {
                constructor() {
                    this.artists = ARTISTS;
                }
                showArtist(item) {
                    this.currentArtist = item;
                }
            };
            AppComponent = __decorate([
                core_1.Component({
                    selector: 'app',
                    templateUrl: './partials/app.html',
                    styleUrls: ["./css/app.css"]
                }), 
                __metadata('design:paramtypes', [])
            ], AppComponent);
            exports_1("AppComponent", AppComponent);
            ARTISTS = [
                {
                    "name": "Harriet Tubman",
                    "shortname": "harriet_tubman",
                    "reknown": "United States",
                    "bio": "Harriet Tubman was an American abolitionist, humanitarian, and an armed scout and spy for the United States Army during the American Civil War. Born into slavery, Tubman escaped and subsequently made some thirteen missions to rescue approximately seventy enslaved families and friends, using the network of antislavery activists and safe houses known as the Underground Railroad. She later helped abolitionist John Brown recruit men for his raid on Harpers Ferry, and in the post-war era was an active participant in the struggle for women's suffrage. (via Wikipedia)"
                }, {
                    "name": "Berta Caceras",
                    "shortname": "berta_caceras",
                    "reknown": "Honduras",
                    "bio": "Berta Caceras was a Honduran environmental activist, indigenous leader of her people, and co-founder and coordinator of the Council of Popular and Indigenous Organizations of Honduras (COPINH). She won the Goldman Environmental Prize in 2015, for a grassroots campaign that successfully pressured the world’s largest dam builder to pull out of the Agua Zarca Dam at the Río Gualcarque. She was assassinated in her home by armed intruders, after years of threats against her life. A former soldier with the US-trained special forces units of the Honduran military asserted that Caceres name was included on a hitlist distributed to them months before her assassination. According to a February 2017 investigation by The Guardian, court papers show that three of the eight people arrested in connection with the assassination are linked to the US-trained elite troops. Two of them, Maj Mariano Díaz and Lt Douglas Giovanny Bustillo, received military training in the US, in Fort Benning, Georgia, site of the former School of the Americas (SOA), now WHINSEC; the SOA has been linked to thousands of murders and human right violations by its graduates in Latin America (via Wikipedia)."
                }, {
                    "name": "Celia Sánchez",
                    "shortname": "celia_sanchez",
                    "reknown": "Cuba",
                    "bio": "Sánchez joined the struggle against the Batista government following the coup of March 10, 1952. She was the founder of the 26th of July Movement in Manzanillo. Together with Frank País, she was one of the first women to assemble a combat squad during the revolution. She made the necessary arrangements throughout the southwest coast region of Cuba for the Granma landing, and was responsible for organising reinforcements once the revolutionaries landed. In 1957, she joined the guerrillas and served as messenger. Celia placed small telegrams inside a Butterfly flower, so the messages would remain secret. As a member of the general staff of the Rebel Army she supplied Che Guevara and other rebels with weapons, occasionally food and medical supplies (via Wikipedia)."
                }, {
                    "name": "Countess Markievicz",
                    "shortname": "countess_markievicz",
                    "reknown": "Ireland",
                    "bio": "Countess Markievicz was an Irish Sinn Féin and Fianna Fáil politician, revolutionary nationalist, suffragette and socialist. In December 1918, she was the first woman elected to the British House of Commons, though she did not take her seat and, along with the other Sinn Féin TDs, formed the first Dáil Éireann. She was also the second woman to hold a cabinet position in the world - Minister for Labour of the Irish Republic, 1919–1922 (via Wikipedia)."
                }, {
                    "name": "Eartha Kitt",
                    "shortname": "eartha_kitt",
                    "reknown": "United States",
                    "bio": "A native of New Orleans, much of Jennifer's work has centered around abstract images that depict flooding and rebuilding, having grown up as a teenager in the post-flood years. Despite the sadness of devastation and lives lost, Jennifer's work also depicts the hope and togetherness of a community that has persevered. Jennifer's exhibit will be discussed during Tuesday's Water in Art theme."
                }, {
                    "name": "Emma Goldman",
                    "shortname": "emma_goldman",
                    "reknown": "Russia, United States, Canada, France",
                    "bio": "Emma Goldman was an anarchist political activist and writer. She played a pivotal role in the development of anarchist political philosophy in North America and Europe in the first half of the 20th century. Born in Kovno, Russian Empire (present-day Kaunas, Lithuania) to a Jewish family, Goldman emigrated to the United States in 1885. Attracted to anarchism after the Haymarket affair, Goldman became a writer and a renowned lecturer on anarchist philosophy, women's rights, and social issues, attracting crowds of thousands. During her life, Goldman was lionized as a free-thinking rebel woman by admirers, and denounced by detractors as an advocate of politically motivated murder and violent revolution. Her writing and lectures spanned a wide variety of issues, including prisons, atheism, freedom of speech, militarism, capitalism, marriage, free love, and homosexuality. (via Wikipedia)"
                }, {
                    "name": "Comandante Ramona",
                    "shortname": "Mexico",
                    "reknown": "Fullerton-Brighton-Norwell Award",
                    "bio": "Comandante Ramona was the nom de guerre of an officer of the Zapatista Army of National Liberation (EZLN), a revolutionary indigenous autonomist organization based in the southern Mexican state of Chiapas. Perhaps the most famous female Zapatista actor, Ramona was one of seven female commanders in charge of directing an army that consisted of one-third women. A member of the Zapatista leading council, the CCRI (Clandestine Revolutionary Indigenous Committee), she served as a symbol of equality and dignity for indigenous and impoverished women (via Wikipedia)."
                }, {
                    "name": "Faye Schulman",
                    "shortname": "faye_schulman",
                    "reknown": "Poland",
                    "bio": "Faye Schulman was a Jewish partisan photographer, and the only such photographer to photograph their struggle in Eastern Europe during the Second World War. She was born in the Eastern Poland (since 1939 - Belarus), and after the Nazis 1941 invaded Belarus her family was imprisoned in a ghetto and most of the people in the ghetto were killed, but she was spared because of her photographic skills. She was recruited to work as a photographer for the Nazis. She took a photograph which she saw depicted her family dead in a mass grave, and this convinced her to join the resistance. She joined a group which was composed mostly of prisoners of war who had escaped from the German captivity, and worked for them as a nurse from September 1942 to July 1944. She also took photographs after getting her photographic equipment back in a raid. After her time in the resistance she married Morris Schulman, and they stayed in the Landsberg displaced persons camps in Germany, where they helped to smuggle weapons to support Israeli independence. In 1948 they went to Canada. Faye Schulman has been decorated by the Soviet/Belorussian, American and Canadian governments. She wrote A Partisan’s Memoir: Woman of the Holocaust (1995) (via Wikipedia)."
                }, {
                    "name": "Malala Yousafzai",
                    "shortname": "malala_yousafzai",
                    "reknown": "Pakistan",
                    "bio": "Malala Yousafzai is a Pakistani activist for female education and the youngest-ever Nobel Prize laureate. She is known for human rights advocacy, especially education of women in her native Swat Valley in Khyber Pakhtunkhwa, northwest Pakistan, where the local Taliban had at times banned girls from attending school. Her advocacy has since grown into an international movement."
                },
                {
                    "name": "Marie Olympe de Gouges",
                    "shortname": "marie_gouges",
                    "reknown": "France",
                    "bio": "Marie Olympe de Gouges was a French playwright and political activist whose feminist and abolitionist writings reached a large audience. She began her career as a playwright in the early 1780s. As political tension rose in France, Olympe de Gouges became increasingly politically engaged. She became an outspoken advocate for improving the condition of slaves in the colonies of 1788. At the same time, she began writing political pamphlets. Today she is perhaps best known as an early feminist who demanded that French women be given the same rights as French men. In her Declaration of the Rights of Woman and the Female Citizen (1791), she challenged the practice of male authority and the notion of male-female inequality. She was executed by guillotine during the Reign of Terror for attacking the regime of the Revolutionary government and for her close relation with the Girondists.(via Wikipedia)"
                },
                {
                    "name": "Wangari Maathai",
                    "shortname": "wangari_maathai",
                    "reknown": "Kenya",
                    "bio": "Wangari Maathai was an internationally renowned Kenyan environmental political activist and Nobel laureate. She was educated in the United States at Mount St. Scholastica (Benedictine College) and the University of Pittsburgh, as well as the University of Nairobi in Kenya. In 1977, Maathai founded the Green Belt Movement, an environmental non-governmental organization focused on the planting of trees, environmental conservation, and women's rights. In 1984, she was awarded the Right Livelihood Award, and in 2004, she became the first African woman to receive the Nobel Peace Prize for her contribution to sustainable development, democracy and peace. Maathai was an elected member of Parliament and served as assistant minister for Environment and Natural Resources in the government of President Mwai Kibaki between January 2003 and November 2005. She was an Honorary Councillor of the World Future Council.(via Wikipedia)"
                },
                {
                    "name": "Rosa Luxemburg",
                    "shortname": "rosa_luxemburg",
                    "reknown": "Germany",
                    "bio": "Rosa Luxemburg was a Marxist theorist, philosopher, economist, anti-war activist, and revolutionary socialist of Polish-Jewish descent who became a naturalized German citizen. She was, successively, a member of the Social Democracy of the Kingdom of Poland and Lithuania (SDKPiL), the Social Democratic Party of Germany (SPD), the Independent Social Democratic Party (USPD), and the Communist Party of Germany (KPD). Due to her pointed criticism of both the Leninist and the more moderate social democratic schools of socialism, Luxemburg has had a somewhat ambivalent reception among scholars and theorists of the political left. Nonetheless, some have regarded Luxemburg and Liebknecht as martyrs of the socialist cause. (via Wikipedia)"
                },
                {
                    "name": "Lucy Parsons",
                    "shortname": "lucy_parsons",
                    "reknown": "United States",
                    "bio": "Lucy Parsons was an American labor organizer, radical socialist and anarchist communist. She is remembered as a powerful orator. Parsons entered the radical movement following her marriage to newspaper editor Albert Parsons and moved with him from Texas to Chicago, where she contributed to the newspaper he famously edited - The Alarm. Following her husband's 1887 execution in conjunction with the Haymarket Affair, Parsons remained a leading American radical activist as a founder of the Industrial Workers of the World and member of other political organizations (via Wikipedia)."
                },
                {
                    "name": "Fannie Lou Hamer",
                    "shortname": "fannie_lou_hamer",
                    "reknown": "United States",
                    "bio": "Fannie Lou Hamer was an American voting rights activist, a leader in the Civil Rights Movement, and philanthropist who worked primarily in Mississippi. She was instrumental in organizing Mississippi's Freedom Summer for the Student Nonviolent Coordinating Committee (SNCC). She was the vice-chair of the Mississippi Freedom Democratic Party, which she represented at the 1964 Democratic National Convention in Atlantic City, New Jersey(via Wikipedia)."
                },
                {
                    "name": "Nguyen Thi Minh Khai",
                    "shortname": "nguyen_thi_minh_khai",
                    "reknown": "Vietnam",
                    "bio": "Nguyen Thi Minh Khai was a Vietnamese revolutionary and a leader of the Indochinese Communist Party during the 1930s(via Wikipedia)."
                },
                {
                    "name": "Lucia Sanchez",
                    "shortname": "lucia_sanchez_saornil",
                    "reknown": "Spain",
                    "bio": "was a Spanish poet, militant anarchist and feminist. She is best known as one of the founders of Mujeres Libres and served in the Confederación Nacional del Trabajo (CNT) and Solidaridad Internacional Antifascista (SIA). At a young age she began writing poetry and associated herself with the emerging Ultraist literary movement. By 1919, she had been published in a variety of journals, including Los Quijotes, Tableros, Plural, Manantial and La Gaceta Literaria. Working under a male pen name, she was able to explore lesbian themes[1] at a time when homosexuality was criminalized and subject to censorship and punishment (via Wikipedia)."
                },
                {
                    "name": "Asya Abdullah",
                    "shortname": "asya_abdullah",
                    "reknown": "Syria, Kurdistan",
                    "bio": "A senior at the China International Art University, Xhou has become well-known for his miniature sculptures, often the size of a rice granule, that are displayed by rear projection of microscope images on canvas. Xhou will discuss the art and science behind his incredibly detailed works of art."
                },
                {
                    "name": "Juana Azurduy de Padilla",
                    "shortname": "juana_padilla",
                    "reknown": "Syria, Kurdistan",
                    "bio": "A senior at the China International Art University, Xhou has become well-known for his miniature sculptures, often the size of a rice granule, that are displayed by rear projection of microscope images on canvas. Xhou will discuss the art and science behind his incredibly detailed works of art."
                },
                {
                    "name": "Funmilay Ransome-Kuti",
                    "shortname": "funmilay_ransom_kuti",
                    "reknown": "Nigeria",
                    "bio": "was a teacher, political campaigner, women's rights activist and traditional aristocrat of Nigeria. She served with distinction as one of the most prominent leaders of her generation. Ransome-Kuti's political activism led to her being described as the doyen of female rights in Nigeria, as well as to her being regarded as The Mother of Africa. Early on, she was a very powerful force advocating for the Nigerian woman's right to vote. Kuti was the mother of the activists Fela Anikulapo Kuti, a musician; Beko Ransome-Kuti, a doctor; and Professor Olikoye Ransome-Kuti, a doctor and health minister(via Wikipedia)."
                },
                {
                    "name": "Sojourner Truth",
                    "shortname": "sojourner_truth",
                    "reknown": "United States",
                    "bio": "Sojourner Truth was an African-American abolitionist and women's rights activist. Truth was born into slavery in Swartekill, Ulster County, New York, but escaped with her infant daughter to freedom in 1826. After going to court to recover her son, in 1828 she became the first black woman to win such a case against a white man. She gave herself the name Sojourner Truth in 1843 after she became convinced that God had called her to leave the city and go into the countryside testifying the hope that was in her. Her best-known speech was delivered extemporaneously, in 1851, at the Ohio Women's Rights Convention in Akron, Ohio. The speech became widely known during the Civil War by the title Ain't I a Woman?, a variation of the original speech re-written by someone else using a stereotypical Southern dialect; whereas Sojourner Truth was from New York and grew up speaking Dutch as her first language. During the Civil War, Truth helped recruit black troops for the Union Army; after the war, she tried unsuccessfully to secure land grants from the federal government for former slaves(via Wikipedia)."
                }
            ];
        }
    }
});
//# sourceMappingURL=component.app.js.map